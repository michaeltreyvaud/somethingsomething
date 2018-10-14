import { connect } from 'react-redux';
import FridgeTask from './fridgeTask';
import { listFridgeTasks } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fridge.task.index.loading,
  items: state.fridge.task.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFridgeTasks: () => dispatch(listFridgeTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeTask);
