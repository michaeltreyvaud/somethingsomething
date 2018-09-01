import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DashBoard from '../Layouts/Dashboard';
import Auth from '../Layouts/Auth';

const noMatch = () => (<h1>No Match</h1>);

const dashboardRoutes = [
  { path: '/', name: 'Main', component: DashBoard },
  { path: '/CompanySettings', name: 'Company Profile', component: DashBoard },
  { path: '/UserSettings', name: 'User Settings', component: DashBoard },
  { path: '/Authorisations', name: 'Authorisations', component: DashBoard },
  { path: '/Authorisations/Create', name: 'Create Authorisation', component: DashBoard },
  { path: '/Teams', name: 'Teams', component: DashBoard },
  { path: '/Users', name: 'Users', component: DashBoard },
  { path: '/CheckList', name: 'Check List', component: DashBoard },
  { path: '/CheckList/Create', name: 'Create Task', component: DashBoard },
  { path: '/SafetyTask', name: 'Safety Task', component: DashBoard },
  { path: '/SafetyTask/Create', name: 'Create Task', component: DashBoard },
  { path: '/SafetyLog', name: 'Safety Log', component: DashBoard },
  { path: '/SafetyCategory', name: 'Safety Category', component: DashBoard },
  { path: '/FridgeItem', name: 'Fridge Item', component: DashBoard },
  { path: '/FridgeTask', name: 'Fridge Task', component: DashBoard },
  { path: '/FridgeLog', name: 'Fridge Log', component: DashBoard },
  { path: '/FridgeLog/Create', name: 'Create Fridge Log', component: DashBoard },
  { path: '/FridgeChart', name: 'Fridge Chart', component: DashBoard },
  { path: '/FreezerItem', name: 'Freezer Item', component: DashBoard },
  { path: '/FreezerTask', name: 'Freezer Task', component: DashBoard },
  { path: '/FreezerLog', name: 'Freezer Log', component: DashBoard },
  { path: '/FreezerLog/Create', name: 'Create Freezer Log', component: DashBoard },
  { path: '/FreezerChart', name: 'Freezer Chart', component: DashBoard },
  { path: '/FoodItem', name: 'Food Item', component: DashBoard },
  { path: '/FoodItem/Create', name: 'Create Food Item', component: DashBoard },
  { path: '/HotHolding', name: 'Hot Holding', component: DashBoard },
  { path: '/HotHolding/Create', name: 'Capture Reheating Temperature', component: DashBoard },
  { path: '/FastCooling', name: 'Fast Cooling', component: DashBoard },
  { path: '/FastCooling/Create', name: 'Capture Cooling Temperature', component: DashBoard },
  { path: '/Service', name: 'Service', component: DashBoard },
  { path: '/Service/Create', name: 'Capture Service Temperature', component: DashBoard },
  { path: '/ColdHotLocation', name: 'Location', component: DashBoard },
  { path: '/ColdHotTransportLog', name: 'Transport Log', component: DashBoard },
  { path: '/SupplierList', name: 'Supplier List', component: DashBoard },
  { path: '/SupplierList/Create', name: 'Create Supplier', component: DashBoard },
  { path: '/DeliveryRecords', name: 'Delivery Records', component: DashBoard },
  { path: '/TraceabilityLabels', name: 'Traceability Labels', component: DashBoard },
];

const authRoutes = [
  { path: '/auth/login', name: 'Main', component: Auth },
  { path: '/auth/forgot', name: 'Main', component: Auth },
  { path: '/auth/newpassword', name: 'Main', component: Auth },
  { path: '/auth/challenge', name: 'Main', component: Auth },
];

const AppRouter = () => (
  <Switch>
    {dashboardRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} routes={prop.routes} key={`${key}${prop.name}`} />)}
    {authRoutes.map((prop, key) => <Route exact path={prop.path} component={prop.component} routes={prop.routes} key={`${key}${prop.name}`} />)}
    <Route component={noMatch} />
  </Switch>
);

export default AppRouter;
