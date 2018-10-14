import { connect } from 'react-redux';
import FreezerTask from './freezerTask';
import { listFreezerTasks } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.freezer.task.index.loading,
  items: state.freezer.task.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFreezerTasks: () => dispatch(listFreezerTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerTask);
