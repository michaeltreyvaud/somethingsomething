import { connect } from 'react-redux';
import Create from './create';
import { createTeam } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.management.team.create.loading,
  success: state.management.team.create.success,
});

const mapDispatchToProps = dispatch => ({
  createTeam: team => dispatch(createTeam(team)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
