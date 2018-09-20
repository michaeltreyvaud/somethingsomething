import { connect } from 'react-redux';
import Users from './users';
import { listUsers } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.management.users.index.loading,
  success: state.management.users.index.success,
  items: state.management.users.index.items,
});

const mapDispatchToProps = dispatch => ({
  listUsers: () => dispatch(listUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
