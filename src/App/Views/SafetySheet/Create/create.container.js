import { connect } from 'react-redux';
import Create from './create';
import { createSafety } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.safety.create.loading,
  success: state.safety.create.success,
  user: state.user.profile.index.user,
  users: state.management.users.index.items,
});

const mapDispatchToProps = dispatch => ({
  createSafety: item => dispatch(createSafety(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
