import { connect } from 'react-redux';
import Create from './create';
import { createUser } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.management.users.create.loading,
  success: state.management.users.create.success,
  teams: state.management.team.index.items,
  //  TODO: Find these from somewhere
  authorizations: ['Admin', 'Manager', 'User'],
});

const mapDispatchToProps = dispatch => ({
  createUser: user => dispatch(createUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
