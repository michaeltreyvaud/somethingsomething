// ##############################
// // // RegularForms view styles
// #############################

import {
  cardTitle,
  successColor,
  dangerColor,
} from '../../../Assets/Jss/material-dashboard-pro-react';
import customCheckboxRadioSwitch from '../../../Components/CustomCheckBox';

const regularFormsStyle = {
  ...customCheckboxRadioSwitch,
  cardIconTitle: {
    ...cardTitle,
    marginTop: '15px',
    marginBottom: '0px',
  },
  actionButton: {
    margin: '0 0 0 5px',
    padding: '5px',
    '& svg,& .fab,& .fas,& .far,& .fal,& .material-icons': {
      marginRight: '0px',
    },
  },
  icon: {
    verticalAlign: 'middle',
    width: '17px',
    height: '17px',
    top: '-1px',
    position: 'relative',
  },
  staticFormGroup: {
    marginLeft: '0',
    marginRight: '0',
    paddingBottom: '10px',
    margin: '8px 0 0 0',
    position: 'relative',
    '&:before,&:after': {
      display: 'table',
      content: '" "',
    },
    '&:after': {
      clear: 'both',
    },
  },
  staticFormControl: {
    marginBottom: '0',
    paddingTop: '8px',
    paddingBottom: '8px',
    minHeight: '34px',
  },
  inputAdornment: {
    marginRight: '8px',
    position: 'relative',
  },
  inputAdornmentIconSuccess: {
    color: `${successColor}!important`,
  },
  inputAdornmentIconError: {
    color: `${dangerColor}!important`,
  },
};

export default regularFormsStyle;
