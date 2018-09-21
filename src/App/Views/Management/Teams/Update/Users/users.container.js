import { connect } from 'react-redux';
import Users from './users';
import { listTeamUsers } from '../../Store/Actions/users';

const mapStateToProps = state => ({
  loading: state.management.team.update.teamUsers.index.loading,
  items: state.management.team.update.teamUsers.index.items,
});

const mapDispatchToProps = dispatch => ({
  listTeamUsers: groupName => dispatch(listTeamUsers(groupName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
