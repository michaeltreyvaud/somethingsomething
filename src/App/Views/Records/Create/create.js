import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Assignment from '@material-ui/icons/Assignment';
import withStyles from '@material-ui/core/styles/withStyles';
import FormControl from '@material-ui/core/FormControl';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import GridItem from '../../../Components/Grid/GridItem';
import Card from '../../../Components/Card/Card';
import GridContainer from '../../../Components/Grid/GridContainer';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';
import CardIcon from '../../../Components/Card/CardIcon';

import extendedFormsStyle from '../../../Assets/Jss/extendedFormsStyle';
import Button from '../../../Components/CustomButtons';

import ReportTypes from './RecordTypes';

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = { type: '' };
  }

  componentWillReceiveProps(nextProps) {
    const { loading } = this.props;
    if (loading && nextProps.loading === false && nextProps.success) this.back();
  }

  setStateValue(key, value) {
    return this.setState({ [key]: value });
  }

  back() {
    const { history } = this.props;
    history.push('/dashboard/records');
  }

  create() {
    const { create, loading } = this.props;
    if (loading) return false;
    const { state } = this;
    delete state.selectedRecordType;
    return create(state);
  }

  updateValue(e) {
    const { target } = e;
    const { value } = target;
    return this.setState({ [target.id || target.name]: value });
  }

  renderRecordTypes() {
    const { recordTypes: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item}${index}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="type"
        value={item.type}
      >
        {item.displayName}
      </MenuItem>));
  }

  renderRecordType() {
    const { foodItems, suppliers } = this.props;
    const { type } = this.state;
    if (!type) return null;
    const childProps = {
      ...this.state,
      foodItems,
      suppliers,
      updateValue: e => this.updateValue(e),
      setStateValue: (key, value) => this.setStateValue(key, value),
    };
    return React.createElement(ReportTypes[type], childProps, null);
  }

  render() {
    const { classes, loading } = this.props;
    const { type } = this.state;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
            </CardHeader>
            <CardBody>
              <FormControl fullWidth className={classes.selectFormControl}>
                <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
                  Record Type
                </InputLabel>
                <Select
                  MenuProps={{ className: classes.selectMenu }}
                  classes={{ select: classes.select }}
                  onChange={e => this.updateValue(e)}
                  value={type}
                  inputProps={{ name: 'type' }}
                >
                  {this.renderRecordTypes()}
                </Select>
              </FormControl>
              {this.renderRecordType()}
              <Button loading={loading} onClick={() => this.create()} color="rose" className={classes.updateProfileButton}>
                Save
              </Button>
              <Button onClick={() => this.back()} color="info" className={classes.updateProfileButton}>
                Cancel
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Create.propTypes = {
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  success: PropTypes.bool.isRequired,
  create: PropTypes.func.isRequired,
  recordTypes: PropTypes.array.isRequired,
  foodItems: PropTypes.array.isRequired,
  suppliers: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Create);
