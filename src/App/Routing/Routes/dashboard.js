import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';

const testing = () => (<h1>testing</h1>);

const dashRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: testing,
  },
];

export default dashRoutes;
