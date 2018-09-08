import { connect } from 'react-redux';
import Delete from './delete';
import { deleteTeam } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.management.team.delete.loading,
  success: state.management.team.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteTeam: (name, index) => dispatch(deleteTeam(name, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
