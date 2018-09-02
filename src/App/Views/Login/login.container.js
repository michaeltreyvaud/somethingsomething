import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginView from './login';
import { login, challenge } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
  errorMessage: state.login.errorMessage,
  challengeType: state.login.challengeType,
  session: state.login.session,
  success: state.login.success,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
  challenge: (email, password, session) => dispatch(challenge(email, password, session)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginView));
