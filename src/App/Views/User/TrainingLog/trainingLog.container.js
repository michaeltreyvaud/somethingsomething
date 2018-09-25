import { connect } from 'react-redux';
import TrainingLog from './trainingLog';
import { listTrainingLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.user.trainingLog.index.loading,
  error: state.user.trainingLog.index.error,
  errorMessage: state.user.trainingLog.index.errorMessage,
  success: state.user.trainingLog.index.success,
  items: state.user.trainingLog.index.items,
});

const mapDispatchToProps = dispatch => ({
    listTrainingLogs: () => dispatch(listTrainingLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TrainingLog);
