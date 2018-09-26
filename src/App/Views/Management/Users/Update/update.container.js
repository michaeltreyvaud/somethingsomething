import { connect } from 'react-redux';
import Update from './update';
import { updateUser } from '../Store/Actions/update';

const findItem = (state, userName) => (state.management.users.index.items
  .find(item => (item.userName === userName)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.management.users.index.loading,
  updating: state.management.users.update.loading,
  teams: state.management.team.index.items,
  //  TODO: Find these from somewhere
  authorizations: ['Admin', 'Manager', 'User'],
});

const mapDispatchToProps = dispatch => ({
  updateUser: user => dispatch(updateUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
