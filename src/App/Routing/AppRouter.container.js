import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { getCompanyInfo, validateToken } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.routes.loading,
  isAuthenticated: state.routes.isAuthenticated,
  sessionTimeout: state.routes.sessionTimeout,
});

const mapDispatchToProps = dispatch => ({
  getCompanyInfo: () => dispatch(getCompanyInfo()),
  validateToken: () => dispatch(validateToken()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
