import { connect } from 'react-redux';
import Profile from './profile';
import { updateUser } from './Store/Actions';

const mapStateToProps = state => ({
  user: state.user.profile.index.user,
  loading: state.user.profile.index.loading,
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
