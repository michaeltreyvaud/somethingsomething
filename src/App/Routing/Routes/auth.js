import LoginPage from '../../Views/Login/login.container';
import ForgotPasswordPage from '../../Views/ForgotPassword/forgot.container';

const Routes = [{
  path: '/auth/login',
  component: LoginPage,
}, {
  path: '/auth/forgot',
  component: ForgotPasswordPage,
}];

export default Routes;
