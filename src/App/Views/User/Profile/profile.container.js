import { connect } from 'react-redux';
import Profile from './profile';

const mapStateToProps = state => ({
  user: state.auth.userDetails,
});

export default connect(mapStateToProps)(Profile);
