import React from 'react';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';

// @material-ui/icons
import Dashboard from '@material-ui/icons/Dashboard';
import Schedule from '@material-ui/icons/Schedule';
import Info from '@material-ui/icons/Info';
import LocationOn from '@material-ui/icons/LocationOn';
import Gavel from '@material-ui/icons/Gavel';
import HelpOutline from '@material-ui/icons/HelpOutline';

// core components
import GridContainer from '../../../Components/Grid/GridContainer';
import GridItem from '../../../Components/Grid/GridItem';
import NavPills from 'components/NavPills/NavPills.jsx';
import Card from '../../../Components/Card/Card';
import CardHeader from '../../../Components/Card/CardHeader';
import CardBody from '../../../Components/Card/CardBody';

import { cardTitle } from 'assets/jss/material-dashboard-pro-react.jsx';

const styles = {
  cardTitle,
  pageSubcategoriesTitle: {
    color: '#3C4858',
    textDecoration: 'none',
    textAlign: 'center',
  },
  cardCategory: {
    margin: '0',
    color: '#999999',
  },
};

const UserSettings = (props) => {
  const { classes } = props;
  return (
    <div>
      Hello
    </div>
  );
};

export default withStyles(styles)(UserSettings);
