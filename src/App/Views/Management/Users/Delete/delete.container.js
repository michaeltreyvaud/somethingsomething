import { connect } from 'react-redux';
import Delete from './delete';
import { deleteUser } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.management.users.delete.loading,
  success: state.management.users.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteUser: (userName, index) => dispatch(deleteUser(userName, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
