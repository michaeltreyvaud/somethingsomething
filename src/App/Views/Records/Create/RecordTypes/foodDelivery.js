import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import Check from '@material-ui/icons/Check';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import CustomInput from '../../../../Components/CustomInput';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

//  TODO: Reset state properly
const initialState = {
  selectedFoodItem: '',
  selectedSupplier: '',
};

class FoodDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    props.setStateValue('deliveryStatus', false);
  }

  setDeliveryStatus(e) {
    const { setStateValue } = this.props;
    const { target } = e;
    return setStateValue('deliveryStatus', !(target.value === 'true'));
  }

  selectValue(e) {
    const { target } = e;
    const { value } = target;
    if (target.name === 'foodItem') {
      const { foodItems, setStateValue } = this.props;
      this.setState({ selectedFoodItem: value });
      return setStateValue('foodItem', {
        id: foodItems[value].id,
        displayName: foodItems[value].name,
      });
    }
    const { suppliers, setStateValue } = this.props;
    this.setState({ selectedSupplier: value });
    return setStateValue('supplier', {
      id: suppliers[value].id,
      displayName: suppliers[value].name,
    });
  }

  renderFoodItems() {
    const { foodItems: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item.name}${item.id}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="foodItem"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  renderSuppliers() {
    const { suppliers: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item.name}${item.id}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="supplier"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  render() {
    const {
      classes, batchCode, updateValue, comments,
      temperature, vehicleNotes, driverName,
      deliveryStatus,
    } = this.props;
    const { selectedFoodItem, selectedSupplier } = this.state;
    return (
      <div>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
            Food Item
          </InputLabel>
          <Select
            MenuProps={{ className: classes.selectMenu }}
            classes={{ select: classes.select }}
            onChange={e => this.selectValue(e)}
            value={selectedFoodItem}
            inputProps={{ name: 'foodItem' }}
          >
            {this.renderFoodItems()}
          </Select>
        </FormControl>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
            Supplier
          </InputLabel>
          <Select
            MenuProps={{ className: classes.selectMenu }}
            classes={{ select: classes.select }}
            onChange={e => this.selectValue(e)}
            value={selectedSupplier}
            inputProps={{ name: 'supplier' }}
          >
            {this.renderSuppliers()}
          </Select>
        </FormControl>
        <CustomInput
          value={batchCode}
          onChange={e => updateValue(e)}
          labelText="Batch Code"
          id="batchCode"
          formControlProps={{ fullWidth: true }}
          inputProps={{ type: 'text' }}
        />
        <CustomInput
          value={temperature}
          onChange={e => updateValue(e)}
          labelText="Temperature"
          id="temperature"
          formControlProps={{ fullWidth: true }}
          inputProps={{ type: 'number' }}
        />
        <CustomInput
          value={vehicleNotes}
          onChange={e => updateValue(e)}
          labelText="Vehicle Notes"
          id="vehicleNotes"
          formControlProps={{ fullWidth: true }}
          inputProps={{ type: 'text' }}
        />
        <CustomInput
          value={driverName}
          onChange={e => updateValue(e)}
          labelText="Driver name"
          id="driverName"
          formControlProps={{ fullWidth: true }}
          inputProps={{ type: 'text' }}
        />
        <CustomInput
          value={comments}
          onChange={e => updateValue(e)}
          labelText="Comments"
          id="comments"
          formControlProps={{ fullWidth: true }}
          inputProps={{ multiline: true, rows: 3 }}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={deliveryStatus}
              id="deliveryStatus"
              value={deliveryStatus}
              onClick={e => this.setDeliveryStatus(e)}
              checkedIcon={<Check className={classes.checkedIcon} />}
              icon={<Check className={classes.uncheckedIcon} />}
              classes={{ checked: classes.checked }}
            />)}
          classes={{ label: classes.label }}
          label="Accepted"
        />
      </div>
    );
  }
}

FoodDelivery.propTypes = {
  classes: PropTypes.object.isRequired,
  foodItems: PropTypes.array.isRequired,
  suppliers: PropTypes.array.isRequired,
  setStateValue: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
  batchCode: PropTypes.string,
  comments: PropTypes.string,
  temperature: PropTypes.number,
  vehicleNotes: PropTypes.string,
  driverName: PropTypes.string,
  deliveryStatus: PropTypes.bool,
};

FoodDelivery.defaultProps = {
  batchCode: '',
  comments: '',
  temperature: '',
  vehicleNotes: '',
  driverName: '',
  deliveryStatus: false,
};

export default withStyles(extendedFormsStyle)(FoodDelivery);
