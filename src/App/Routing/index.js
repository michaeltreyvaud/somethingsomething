import React from 'react';
import { Switch, Route } from 'react-router-dom';

const testing = () => (<h1>Testing</h1>);
const noMatch = () => (<h1>No MAtch</h1>);

const indexRoutes = [
  { path: '/', name: 'Main', component: testing },
];

const AppRouter = () => (
  <Switch>
    {indexRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} key={`${key}${prop.name}`} />)}
    <Route component={noMatch} />
  </Switch>
);

export default AppRouter;
