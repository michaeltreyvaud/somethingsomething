import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import { getCompanyInfo } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.routes.loading,
});

const mapDispatchToProps = dispatch => ({
  getCompanyInfo: () => dispatch(getCompanyInfo()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppRouter));
