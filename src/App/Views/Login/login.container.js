import { connect } from 'react-redux';
import LoginView from './login';
import { login } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.login.loading,
  error: state.login.error,
  errorMessage: state.login.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
