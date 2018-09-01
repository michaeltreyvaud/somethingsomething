import Fingerprint from '@material-ui/icons/Fingerprint';
import LoginPage from '../../Views/Login';

const Routes = [
  {
    path: '/auth/login',
    name: 'Login Page',
    short: 'Login',
    mini: 'LP',
    icon: Fingerprint,
    component: LoginPage,
  },
];

export default Routes;
