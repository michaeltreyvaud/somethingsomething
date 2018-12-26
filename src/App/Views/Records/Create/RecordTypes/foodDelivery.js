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

const initialState = {
  selectedFoodItem: '',
  selectedSupplier: '',
};

class FoodDelivery extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    props.setRecordValue('accepted', false);
  }

  selectValue(e) {
    const { target } = e;
    const { value } = target;
    if (target.name === 'foodItem') {
      const { foodItems, setRecordValue } = this.props;
      this.setState({ selectedFoodItem: value });
      return setRecordValue('foodItem', {
        id: foodItems[value].id,
        displayName: foodItems[value].name,
      });
    }
    const { suppliers, setRecordValue } = this.props;
    this.setState({ selectedSupplier: value });
    return setRecordValue('supplier', {
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
    const { classes, setRecordValue, record } = this.props;
    const {
      batchCode, comments, temperature,
      vehicleNotes, driverName, accepted,
    } = record;
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
        {selectedFoodItem !== '' && (
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
        )}
        {selectedFoodItem !== '' && selectedSupplier !== '' && (
          <div>
            <CustomInput
              value={batchCode}
              labelText="Batch Code"
              formControlProps={{ fullWidth: true }}
              inputProps={{ type: 'text' }}
              onChange={e => setRecordValue('batchCode', e.target.value)}
            />
            <CustomInput
              value={temperature}
              labelText="Temperature"
              formControlProps={{ fullWidth: true }}
              inputProps={{ type: 'number' }}
              onChange={e => setRecordValue('temperature', e.target.value)}
            />
            <CustomInput
              value={vehicleNotes}
              labelText="Vehicle Notes"
              formControlProps={{ fullWidth: true }}
              inputProps={{ type: 'text' }}
              onChange={e => setRecordValue('vehicleNotes', e.target.value)}
            />
            <CustomInput
              value={driverName}
              labelText="Driver name"
              formControlProps={{ fullWidth: true }}
              inputProps={{ type: 'text' }}
              onChange={e => setRecordValue('driverName', e.target.value)}
            />
            <CustomInput
              value={comments}
              labelText="Comments"
              formControlProps={{ fullWidth: true }}
              inputProps={{ multiline: true, rows: 3 }}
              onChange={e => setRecordValue('comments', e.target.value)}
            />
            <FormControlLabel
              control={(
                <Checkbox
                  checked={accepted}
                  value={accepted}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  classes={{ checked: classes.checked }}
                  onClick={e => setRecordValue('accepted', !(e.target.value === 'true'))}
                />)}
              classes={{ label: classes.label }}
              label="Delivery Accepted"
            />
          </div>
        )}
      </div>
    );
  }
}

FoodDelivery.propTypes = {
  classes: PropTypes.object.isRequired,
  foodItems: PropTypes.array.isRequired,
  suppliers: PropTypes.array.isRequired,
  setRecordValue: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(FoodDelivery);
