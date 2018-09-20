import { connect } from 'react-redux';
import Remove from './remove';
import { deleteTeamUser } from '../../../Store/Actions/users';

const mapStateToProps = state => ({
  loading: state.management.team.update.teamUsers.delete.loading,
  success: state.management.team.update.teamUsers.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteTeamUser:
    (groupName, userName, index) => dispatch(deleteTeamUser(groupName, userName, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Remove);
