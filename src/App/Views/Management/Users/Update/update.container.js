import { connect } from 'react-redux';
import Update from './update';
import { updateUser } from '../Store/Actions/update';

const mapStateToProps = state => ({
  loading: state.management.users.update.loading,
  success: state.management.users.update.success,
});

const mapDispatchToProps = dispatch => ({
  updateUser: (item, index) => dispatch(updateUser(item, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
