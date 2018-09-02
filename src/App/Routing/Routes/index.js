import Auth from '../../Layouts/Auth';
import Dashboard from '../../Layouts/Dashboard/dashboard.container';

const core = [
  { path: '/auth/:action', component: Auth },
  { path: '/dashboard/:view', component: Dashboard },
  { path: '/dashboard/:view/:subview', component: Dashboard },
  { path: '/dashboard/:view/:subview/:action', component: Dashboard },
];

export default core;
