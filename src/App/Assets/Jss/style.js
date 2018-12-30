import { cardTitle } from './material-dashboard-pro-react';
import customSelectStyle from './customSelectStyle';
import customCheckboxRadioSwitch from './customCheckboxRadioSwitch';
import buttonStyle from './buttonStyle';

const extendedFormsStyle = {
  ...customCheckboxRadioSwitch,
  ...customSelectStyle,
  cardTitle,
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
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  label: {
    cursor: 'pointer',
    paddingLeft: '0',
    color: 'rgba(0, 0, 0, 0.26)',
    fontSize: '14px',
    lineHeight: '1.428571429',
    fontWeight: '400',
    display: 'inline-flex',
  },
  ...buttonStyle,
};

export default extendedFormsStyle;
