import { connect } from 'react-redux';
import Create from './create';
import { createSafetyTask } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.safetyrecord.task.create.loading,
  success: state.safetyrecord.task.create.success,
  teams: state.management.team.index.items,
  users: state.management.users.index.items,
  categories: state.safetyrecord.category.index.items,
});

const mapDispatchToProps = dispatch => ({
  createSafetyTask: item => dispatch(createSafetyTask(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
