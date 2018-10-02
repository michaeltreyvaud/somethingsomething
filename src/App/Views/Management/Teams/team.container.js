import { connect } from 'react-redux';
import Team from './team';
import { listTeams } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.management.team.index.loading,
  items: state.management.team.index.items,
});

const mapDispatchToProps = dispatch => ({
  listTeams: () => dispatch(listTeams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
