import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteTrainingLog } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.user.trainingLog.delete.loading,
  success: state.user.trainingLog.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteTrainingLog: (createdAt, index) => dispatch(deleteTrainingLog(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
