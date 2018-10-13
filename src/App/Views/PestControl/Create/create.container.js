import { connect } from 'react-redux';
import Create from './create';
import { createPest } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.pest.create.loading,
  success: state.pest.create.success,
  user: state.user.profile.index.user,
  users: state.management.users.index.items,
});

const mapDispatchToProps = dispatch => ({
  createPest: item => dispatch(createPest(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
