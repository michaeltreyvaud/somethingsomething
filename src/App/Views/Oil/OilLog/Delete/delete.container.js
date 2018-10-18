import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteCleaningLog } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.cleaningItem.log.delete.loading,
  success: state.cleaningItem.log.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteCleaningLog: (createdAt, index) => dispatch(deleteCleaningLog(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
