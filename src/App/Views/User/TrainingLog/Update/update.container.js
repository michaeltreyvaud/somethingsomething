import { connect } from 'react-redux';
import Update from './update';
import { updateTrainingLog } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.user.trainingLog.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.user.trainingLog.index.loading,
  updating: state.user.trainingLog.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateTrainingLog: item => dispatch(updateTrainingLog(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
