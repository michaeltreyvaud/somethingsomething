import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteReport } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.report.delete.loading,
  success: state.report.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteReport: (createdAt, index) => dispatch(deleteReport(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
