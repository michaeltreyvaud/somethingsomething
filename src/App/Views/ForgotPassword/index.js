import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ForgotPasswordView from './forgot';
import { forgotPassword } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.auth.forgotPassword.loading,
  error: state.auth.forgotPassword.error,
  errorMessage: state.auth.forgotPassword.errorMessage,
  success: state.auth.forgotPassword.success,
});

const mapDispatchToProps = dispatch => ({
  forgotPassword: email => dispatch(forgotPassword(email)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView));
