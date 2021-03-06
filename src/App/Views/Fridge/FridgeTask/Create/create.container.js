import { connect } from 'react-redux';
import Create from './create';
import { createFridgeTask } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.fridge.task.create.loading,
  success: state.fridge.task.create.success,
  teams: state.management.team.index.items,
  users: state.management.users.index.items,
  fridgeItems: state.fridge.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  createFridgeTask: item => dispatch(createFridgeTask(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
