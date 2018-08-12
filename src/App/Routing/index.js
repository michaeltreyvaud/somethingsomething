import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../Layouts/Dashboard';

const noMatch = () => (<h1>No MAtch</h1>);

const indexRoutes = [
  { path: '/', name: 'Main', component: DashBoard },
  { path: '/CompanySettings', name: 'Company Profile', component: DashBoard },
  { path: '/UserSettings', name: 'User Settings', component: DashBoard },
  { path: '/CheckList', name: 'Check List', component: DashBoard },
  { path: '/SafetyTask', name: 'Safety Task', component: DashBoard },
];

const AppRouter = () => (
  <Switch>
    {indexRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} key={`${key}${prop.name}`} />)}
    <Route component={noMatch} />
  </Switch>
);

export default AppRouter;
