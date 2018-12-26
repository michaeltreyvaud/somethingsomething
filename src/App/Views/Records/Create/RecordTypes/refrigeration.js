import React, { Component } from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import CustomInput from '../../../../Components/CustomInput';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

//  TODO: reset state properly
const initialState = {
  selectedRefrigerationType: '',
  selectedRefrigerationUnit: '',
};

class Refrigeration extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  selectValue(e) {
    const { target } = e;
    const { value } = target;
    const { refrigerationTypes, setStateValue } = this.props;
    if (target.name === 'refrigerationType') {
      this.setState({ selectedRefrigerationType: value });
      return setStateValue('refrigerationType', refrigerationTypes[value].refrigerationType);
    }

    const { selectedRefrigerationType } = this.state;
    let selectedObject = {};
    switch (selectedRefrigerationType) {
      case 0: {
        const { fridgeItems } = this.props;
        selectedObject = fridgeItems[value];
        break;
      }
      case 1: {
        const { freezerItems } = this.props;
        selectedObject = freezerItems[value];
        break;
      }
      case 2: {
        const { chillDisplayItems } = this.props;
        selectedObject = chillDisplayItems[value];
        break;
      }
      default:
    }
    this.setState({ selectedRefrigerationUnit: value });
    return setStateValue('refrigerationUnit', selectedObject);
  }

  renderRefrigerationTypes() {
    const { refrigerationTypes: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item.refrigerationType}${item.id}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="refrigerationType"
        value={index}
      >
        {item.displayName}
      </MenuItem>));
  }

  renderRefrigerationUnit() {
    const { classes } = this.props;
    const { selectedRefrigerationType } = this.state;
    let items;
    switch (selectedRefrigerationType) {
      case 0: {
        const { fridgeItems } = this.props;
        items = fridgeItems;
        break;
      }
      case 1: {
        const { freezerItems } = this.props;
        items = freezerItems;
        break;
      }
      case 2: {
        const { chillDisplayItems } = this.props;
        items = chillDisplayItems;
        break;
      }
      default:
    }
    return items.map((item, index) => (
      <MenuItem
        key={`${item.id}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="refrigerationUnit"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  render() {
    const {
      classes, setStateValue,
      temperature, updateValue,
      comments,
    } = this.props;
    const { selectedRefrigerationType, selectedRefrigerationUnit } = this.state;
    return (
      <div>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
            Refrigeration Type
          </InputLabel>
          <Select
            MenuProps={{ className: classes.selectMenu }}
            classes={{ select: classes.select }}
            onChange={(e) => {
              //  Reset leftover data
              this.setState(initialState);
              setStateValue('refrigerationUnit', {});
              this.selectValue(e);
            }}
            value={selectedRefrigerationType}
            inputProps={{ name: 'refrigerationType' }}
          >
            {this.renderRefrigerationTypes()}
          </Select>
        </FormControl>
        {selectedRefrigerationType !== '' && (
          <FormControl fullWidth className={classes.selectFormControl}>
            <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
              Select Refrigeration Unit
            </InputLabel>
            <Select
              MenuProps={{ className: classes.selectMenu }}
              classes={{ select: classes.select }}
              onChange={e => this.selectValue(e)}
              value={selectedRefrigerationUnit}
              inputProps={{ name: 'refrigerationUnit' }}
            >
              {this.renderRefrigerationUnit()}
            </Select>
          </FormControl>)}
        {selectedRefrigerationType !== '' && selectedRefrigerationUnit !== '' && (
          <CustomInput
            value={temperature || ''}
            onChange={e => updateValue(e)}
            labelText="Temperature"
            id="temperature"
            formControlProps={{ fullWidth: true }}
            inputProps={{ type: 'number' }}
          />)}
        {selectedRefrigerationType !== '' && selectedRefrigerationUnit !== '' && (
          <CustomInput
            value={comments || ''}
            onChange={e => updateValue(e)}
            labelText="Comments"
            id="comments"
            formControlProps={{ fullWidth: true }}
            inputProps={{ multiline: true, rows: 3 }}
          />)}
      </div>
    );
  }
}

Refrigeration.propTypes = {
  classes: PropTypes.object.isRequired,
  fridgeItems: PropTypes.array.isRequired,
  freezerItems: PropTypes.array.isRequired,
  chillDisplayItems: PropTypes.array.isRequired,
  refrigerationTypes: PropTypes.array.isRequired,
  setStateValue: PropTypes.func.isRequired,
  updateValue: PropTypes.func.isRequired,
  comments: PropTypes.string,
  temperature: PropTypes.number,
};

Refrigeration.defaultProps = {
  comments: '',
  temperature: '',
};

export default withStyles(extendedFormsStyle)(Refrigeration);
