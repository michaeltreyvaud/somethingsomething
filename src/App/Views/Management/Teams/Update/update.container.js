import { connect } from 'react-redux';
import Update from './update';
import { updateTeam } from '../Store/Actions/update';

const findItem = (state, name) => (state.management.team.index.items
  .find(item => (item.name === name)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.management.team.index.loading,
  updating: state.management.team.update.index.loading,
});

const mapDispatchToProps = dispatch => ({
  updateTeam: team => dispatch(updateTeam(team)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
