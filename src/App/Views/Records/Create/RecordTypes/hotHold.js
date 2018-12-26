import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import moment from 'moment';

import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import CustomInput from '../../../../Components/CustomInput';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

const initialState = { selectedFoodItem: '' };

class HotHold extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  selectValue(e) {
    const { target } = e;
    const { value } = target;
    const { foodItems, setRecordValue } = this.props;
    this.setState({ selectedFoodItem: value });
    return setRecordValue('foodItem', {
      id: foodItems[value].id,
      displayName: foodItems[value].name,
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

  render() {
    const { classes, setRecordValue, record } = this.props;
    const { timeIntoHold, comments, temperature } = record;
    const { selectedFoodItem } = this.state;
    return (
      <div>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
            Food Item
          </InputLabel>
          <Select
            MenuProps={{ className: classes.selectMenu }}
            classes={{ select: classes.select }}
            value={selectedFoodItem}
            inputProps={{ name: 'foodItem' }}
            onChange={e => this.selectValue(e)}
          >
            {this.renderFoodItems()}
          </Select>
        </FormControl>
        {selectedFoodItem !== '' && (
          <div>
            <FormControl fullWidth>
              <Datetime
                value={moment(timeIntoHold || '')}
                dateFormat="DD/MM/YYYY"
                timeFormat={false}
                inputProps={{ placeholder: 'Time Into Hot Hold' }}
                onChange={date => setRecordValue('timeIntoHold', date.valueOf())}
              />
            </FormControl>
            <CustomInput
              value={temperature}
              labelText="Temperature"
              formControlProps={{ fullWidth: true }}
              inputProps={{ type: 'number' }}
              onChange={e => setRecordValue('temperature', e.target.value)}
            />
            <CustomInput
              value={comments}
              labelText="Comments"
              formControlProps={{ fullWidth: true }}
              inputProps={{ multiline: true, rows: 3 }}
              onChange={e => setRecordValue('comments', e.target.value)}
            />
          </div>
        )}
      </div>
    );
  }
}

HotHold.propTypes = {
  classes: PropTypes.object.isRequired,
  foodItems: PropTypes.array.isRequired,
  setRecordValue: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
};

export default withStyles(extendedFormsStyle)(HotHold);
