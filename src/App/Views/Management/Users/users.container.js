import { connect } from 'react-redux';
import Users from './users';
import { listUsers } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.management.users.index.loading,
  items: state.management.users.index.items,
  teams: state.management.team.index.items,
});

const mapDispatchToProps = dispatch => ({
  listUsers: () => dispatch(listUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
