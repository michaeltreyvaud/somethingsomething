import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SignatureCanvas from 'react-signature-canvas';
import Today from '@material-ui/icons/Today';
import withStyles from '@material-ui/core/styles/withStyles';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import CustomInput from '../../../../Components/CustomInput';
import ImageUpload from '../../../../Components/CustomUpload/ImageUpload';

import GridItem from '../../../../Components/Grid/GridItem';
import Button from '../../../../Components/CustomButtons';
import Card from '../../../../Components/Card/Card';
import GridContainer from '../../../../Components/Grid/GridContainer';
import CardHeader from '../../../../Components/Card/CardHeader';
import CardBody from '../../../../Components/Card/CardBody';
import CardIcon from '../../../../Components/Card/CardIcon';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

class Create extends Component {
  constructor(props) {
    super(props);
    const { user } = props;
    this.state = {
      selectedFridgeItem: -1,
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
    const { createFridgeLog, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    delete state.selectedFridgeItem;
    return createFridgeLog(state);
  }

  updateValue(e) {
    const { target } = e;
    const { value } = target;
    if (target.name === 'fridgeItem') {
      const { fridgeItems } = this.props;
      return this.setState({
        selectedFridgeItem: value,
        fridgeItem: {
          id: fridgeItems[value].id,
          displayName: fridgeItems[value].name,
        },
      });
    }
    return this.setState({
      [target.id || target.name]: value,
    });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/fridge/log');
  }

  renderFridgeItems() {
    const { fridgeItems, classes } = this.props;
    return fridgeItems.map((fridgeItem, index) => (
      <MenuItem
        key={`${fridgeItem.name}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="foodItem"
        value={index}
      >
        {fridgeItem.name}
      </MenuItem>));
  }

  render() {
    const { classes, loading } = this.props;
    const {
      temperature, selectedFridgeItem, comments,
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
                <h4 className={classes.cardIconTitle}>Fridge Log</h4>
              </CardHeader>
              <CardBody>
                <div>
                  <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                      Choose Fridge
                    </InputLabel>
                    <Select
                      MenuProps={{ className: classes.selectMenu }}
                      classes={{ select: classes.select }}
                      onChange={e => this.updateValue(e)}
                      value={selectedFridgeItem}
                      inputProps={{ name: 'fridgeItem' }}
                    >
                      {this.renderFridgeItems()}
                    </Select>
                  </FormControl>
                  <CustomInput
                    labelText="Temperature"
                    id="temperature"
                    value={temperature}
                    formControlProps={{ fullWidth: true }}
                    inputProps={{ type: 'number' }}
                    onChange={e => this.updateValue(e)}
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
  createFridgeLog: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  fridgeItems: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
