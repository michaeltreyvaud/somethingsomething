import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { hideDashBoardError, hideDashBoardSuccess } from './Store/Actions';

const mapStateToProps = state => ({
  isAuthenticated: state.routes.isAuthenticated,
  loading: state.layouts.dashboard.loading,
  error: state.layouts.dashboard.error,
  errorMessage: state.layouts.dashboard.errorMessage,
  success: state.layouts.dashboard.success,
  successMessage: state.layouts.dashboard.successMessage,
});

const mapDispatchToProps = dispatch => ({
  hideDashBoardError: () => dispatch(hideDashBoardError()),
  hideDashBoardSuccess: () => dispatch(hideDashBoardSuccess()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
