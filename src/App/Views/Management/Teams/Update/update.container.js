import { connect } from 'react-redux';
import Update from './update';
import { updateTeam } from '../Store/Actions/update';

const mapStateToProps = state => ({
  loading: state.management.team.update.loading,
  success: state.management.team.update.success,
});

const mapDispatchToProps = dispatch => ({
  updateTeam: (item, index) => dispatch(updateTeam(item, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
