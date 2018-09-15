import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginView from './login';
import { login, challenge } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.auth.login.loading,
  error: state.auth.login.error,
  errorMessage: state.auth.login.errorMessage,
  challengeType: state.auth.login.challengeType,
  session: state.auth.login.session,
  success: state.auth.login.success,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  challenge: (email, password, session) => dispatch(challenge(email, password, session)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));
