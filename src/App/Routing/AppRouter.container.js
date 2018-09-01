import { connect } from 'react-redux';
import AppRouter from './AppRouter';
import { getCompanyInfo } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.routes.loading,
});

const mapDispatchToProps = dispatch => ({
  getCompanyInfo: () => dispatch(getCompanyInfo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
