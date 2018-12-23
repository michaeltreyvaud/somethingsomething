import {
  container,
  cardTitle,
} from '../../../Assets/Jss/material-dashboard-pro-react';

const Style = theme => ({
  container: {
    ...container,
    zIndex: '4',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '100px',
    },
  },
  cardTitle: {
    ...cardTitle,
    color: '#FFFFFF',
  },
  textCenter: { textAlign: 'center' },
  justifyContentCenter: { justifyContent: 'center !important' },
  customButtonClass: {
    '&,&:focus,&:hover': { color: '#FFFFFF' },
    marginLeft: '5px',
    marginRight: '5px',
  },
  inputAdornment: { marginRight: '18px' },
  inputAdornmentIcon: { color: '#555' },
  cardHeader: { marginBottom: '20px' },
  socialLine: { padding: '0.9375rem 0' },
});

export default Style;
