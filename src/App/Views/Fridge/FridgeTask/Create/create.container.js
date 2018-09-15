import { connect } from 'react-redux';
import Create from './create';

const mapStateToProps = state => ({
  //  TODO: Load these in
  teams: state.management.team.index.items,
  users: state.management.users.index.items,
  fridges: state.fridge.item.index.items,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
