import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import CustomInput from '../../../../Components/CustomInput';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

const initialState = { selectedLocation: '' };

class Pest extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  selectValue(e) {
    const { target } = e;
    const { value } = target;
    const { locations, setRecordValue } = this.props;
    this.setState({ selectedLocation: value });
    return setRecordValue('foodItem', {
      id: locations[value].id,
      displayName: locations[value].name,
    });
  }

  renderLocations() {
    const { locations: items, classes } = this.props;
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
    const { comment } = record;
    const { selectedLocation } = this.state;
    return (
      <div>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
            Location
          </InputLabel>
          <Select
            MenuProps={{ className: classes.selectMenu }}
            classes={{ select: classes.select }}
            onChange={e => this.selectValue(e)}
            value={selectedLocation}
            inputProps={{ name: 'location' }}
          >
            {this.renderLocations()}
          </Select>
        </FormControl>
        {selectedLocation !== '' && (
          <CustomInput
            value={comment}
            labelText="Comment"
            formControlProps={{ fullWidth: true }}
            inputProps={{ multiline: true, rows: 3 }}
            onChange={e => setRecordValue('comment', e.target.value)}
          />
        )}
      </div>
    );
  }
}

Pest.propTypes = {
  classes: PropTypes.object.isRequired,
  setRecordValue: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
  locations: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Pest);
