import { connect } from 'react-redux';
import Users from './users';
import { listTeamUsers } from '../../Store/Actions/users';

const mapStateToProps = state => ({
  loading: state.management.team.update.teamUsers.loading,
  error: state.management.team.update.teamUsers.error,
  errorMessage: state.management.team.update.teamUsers.errorMessage,
  success: state.management.team.update.teamUsers.success,
  items: state.management.team.update.teamUsers.items,
});

const mapDispatchToProps = dispatch => ({
  listTeamUsers: groupName => dispatch(listTeamUsers(groupName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
