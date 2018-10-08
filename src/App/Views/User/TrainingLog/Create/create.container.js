import { connect } from 'react-redux';
import Create from './create';
import { createTrainingLog } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.user.trainingLog.create.loading,
  success: state.user.trainingLog.create.success,
});

const mapDispatchToProps = dispatch => ({
  createTrainingLog: item => dispatch(createTrainingLog(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
