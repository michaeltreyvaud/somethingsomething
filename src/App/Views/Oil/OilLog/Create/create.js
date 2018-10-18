import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignatureCanvas from 'react-signature-canvas';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from '../../../../Components/Grid/GridItem';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';

import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';
import CustomInput from '../../../../Components/CustomInput';
import Button from '../../../../Components/CustomButtons';

import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = {
      selectedFoodItem: -1,
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      image: 'https://todo.com',
      comments: '',
      signature: user.signature,
    };
  }

  componentDidMount() {
    const { signature } = this.state;
    this.sigCanvas.fromDataURL(signature);
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) {
      this.back();
    }
  }

  create() {
    const { createCleaningLog, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    delete state.selectedFoodItem;
    return createCleaningLog(state);
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/cleaning/log');
  }

  updateValue(e) {
    const { target } = e;
    const { value } = target;
    if (target.name === 'cleaningItem') {
      const { cleaningItem } = this.props;
      return this.setState({
        selectedFoodItem: value,
        cleaningItem: {
          id: cleaningItem[value].createdAt,
          displayName: cleaningItem[value].name,
        },
      });
    }
    return this.setState({
      [target.id || target.name]: value,
    });
  }

  renderFoodItems() {
    const { cleaningItem, classes } = this.props;
    return cleaningItem.map((cleaningItem, index) => (
      <MenuItem
        key={`${cleaningItem.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="cleaningItem"
        value={index}
      >
        {cleaningItem.name}
      </MenuItem>));
  }

  render() {
    const { classes, loading } = this.props;
    const {
      selectedFoodItem, temperature, comments,
    } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="rose" icon>
                <CardIcon color="rose">
                  <Today />
                </CardIcon>
              </CardHeader>
              <CardBody>
                <div>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Choose Food Item
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      onChange={e => this.updateValue(e)}
                      value={selectedFoodItem}
                      inputProps={{ name: 'cleaningItem' }}
                    >
                      {this.renderFoodItems()}
                    </Select>
                  </FormControl>
                  <CustomInput
                    value={temperature}
                    onChange={e => this.updateValue(e)}
                    labelText="Capture Temperature Value"
                    id="temperature"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'number' }}
                  />
                  <ImageUpload
                    avatar
                    addButtonProps={{ color: 'rose', round: true }}
                    changeButtonProps={{ color: 'rose', round: true }}
                    removeButtonProps={{ color: 'danger', round: true }}
                  />
                  <CustomInput
                    value={comments}
                    labelText="Comments"
                    id="comments"
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ multiline: true, rows: 3 }}
                    onChange={e => this.updateValue(e)}
                  />
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <h4 className={classes.cardIconTitle}>Signature</h4>
                    <SignatureCanvas
                      ref={(ref) => { this.sigCanvas = ref; }}
                      backgroundColor="#ECECEC"
                      penColor="black"
                      clearOnResize={false}
                    />
                  </FormControl>
                  <Button loading={loading} onClick={() => this.create()} color="rose" className={classes.updateProfileButton}>
                    Save
                  </Button>
                  <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                    Cancel
                  </Button>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  createCleaningLog: PropTypes.func.isRequired,
  cleaningItem: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
