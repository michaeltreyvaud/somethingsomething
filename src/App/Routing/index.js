import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../Layouts/Dashboard';

const noMatch = () => (<h1>No MAtch</h1>);

const indexRoutes = [
  { path: '/', name: 'Main', component: DashBoard },
  { path: '/CompanySettings', name: 'Company Profile', component: DashBoard },
  { path: '/UserSettings', name: 'User Settings', component: DashBoard },
  { path: '/Authorisations', name: 'Authorisations', component: DashBoard },
  { path: '/Teams', name: 'Teams', component: DashBoard },
  { path: '/Users', name: 'Users', component: DashBoard },
  { path: '/CheckList', name: 'Check List', component: DashBoard },
  { path: '/SafetyTask', name: 'Safety Task', component: DashBoard },
  { path: '/SafetyLog', name: 'Safety Log', component: DashBoard },
  { path: '/SafetyCategory', name: 'Safety Category', component: DashBoard },
  { path: '/FridgeItem', name: 'Fridge Item', component: DashBoard },
  { path: '/FridgeTask', name: 'Fridge Task', component: DashBoard },
  { path: '/FridgeLog', name: 'Fridge Log', component: DashBoard },
  { path: '/FridgeChart', name: 'Fridge Chart', component: DashBoard },
  { path: '/FreezerItem', name: 'Freezer Item', component: DashBoard },
  { path: '/FreezerTask', name: 'Freezer Task', component: DashBoard },
  { path: '/FreezerLog', name: 'Freezer Log', component: DashBoard },
  { path: '/FreezerChart', name: 'Freezer Chart', component: DashBoard },
];

const AppRouter = () => (
  <Switch>
    {indexRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} key={`${key}${prop.name}`} />)}
    <Route component={noMatch} />
  </Switch>
);

export default AppRouter;
