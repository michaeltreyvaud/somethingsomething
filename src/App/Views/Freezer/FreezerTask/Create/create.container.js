import { connect } from 'react-redux';
import Create from './create';
import { createFreezerTask } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.freezer.task.create.loading,
  success: state.freezer.task.create.success,
  teams: state.management.team.index.items,
  users: state.management.users.index.items,
  freezerItems: state.freezer.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  createFreezerTask: item => dispatch(createFreezerTask(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
