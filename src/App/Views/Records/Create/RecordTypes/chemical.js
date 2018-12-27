import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import CustomInput from '../../../../Components/CustomInput';
import extendedFormsStyle from '../../../../Assets/Jss/extendedFormsStyle';

const initialState = { selectedChemical: '' };

class Chemical extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  selectValue(e) {
    const { target } = e;
    const { value } = target;
    const { chemicalList, setRecordValue } = this.props;
    this.setState({ selectedChemical: value });
    return setRecordValue('chemical', {
      id: chemicalList[value].id,
      displayName: chemicalList[value].name,
    });
  }

  renderChemicals() {
    const { chemicalList: items, classes } = this.props;
    return items.map((item, index) => (
      <MenuItem
        key={`${item.name}${item.id}`}
        classes={{ root: classes.selectMenuItem, selected: classes.selectMenuItemSelected }}
        id="chemical"
        value={index}
      >
        {item.name}
      </MenuItem>));
  }

  render() {
    const { classes, setRecordValue, record } = this.props;
    const { comments } = record;
    const { selectedChemical } = this.state;
    return (
      <div>
        <FormControl fullWidth className={classes.selectFormControl}>
          <InputLabel htmlFor="simple-select" className={classes.selectLabel}>
            Chemical
          </InputLabel>
          <Select
            MenuProps={{ className: classes.selectMenu }}
            classes={{ select: classes.select }}
            onChange={e => this.selectValue(e)}
            value={selectedChemical}
            inputProps={{ name: 'chemical' }}
          >
            {this.renderChemicals()}
          </Select>
        </FormControl>
        {selectedChemical !== '' && (
          <CustomInput
            value={comments}
            labelText="Comments"
            formControlProps={{ fullWidth: true }}
            inputProps={{ multiline: true, rows: 3 }}
            onChange={e => setRecordValue('comments', e.target.value)}
          />
        )}
      </div>
    );
  }
}

Chemical.propTypes = {
  classes: PropTypes.object.isRequired,
  setRecordValue: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
  chemicalList: PropTypes.array.isRequired,
};

export default withStyles(extendedFormsStyle)(Chemical);
