import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ForgotPasswordView from './forgot';
import { forgotPassword } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.forgotPassword.loading,
  error: state.forgotPassword.error,
  errorMessage: state.forgotPassword.errorMessage,
  success: state.forgotPassword.success,
});

const mapDispatchToProps = dispatch => ({
  forgotPassword: email => dispatch(forgotPassword(email)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordView));
