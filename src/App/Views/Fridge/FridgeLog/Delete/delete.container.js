import { connect } from 'react-redux';
import DeleteLog from './delete';
import { deleteFridgeLog } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.fridge.log.delete.loading,
  success: state.fridge.log.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteFridgeLog: (createdAt, index) => dispatch(deleteFridgeLog(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteLog);
