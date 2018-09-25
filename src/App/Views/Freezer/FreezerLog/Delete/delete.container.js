import { connect } from 'react-redux';
import DeleteLog from './delete';
import { deleteFreezerLog } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.freezer.log.delete.loading,
  success: state.freezer.log.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteFreezerLog: (createdAt, index) => dispatch(deleteFreezerLog(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteLog);
