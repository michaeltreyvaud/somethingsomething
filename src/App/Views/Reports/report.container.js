import { connect } from 'react-redux';
import Report from './report';
import { listReports } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.report.index.loading,
  items: state.report.index.items,
});

const mapDispatchToProps = dispatch => ({
  listReports: () => dispatch(listReports()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Report);
