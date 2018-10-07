import { connect } from 'react-redux';
import Create from './create';
import { createFreezerLog } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.freezer.log.create.loading,
  success: state.freezer.log.create.success,
  user: state.user.profile.index.user,
  freezerItems: state.freezer.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  createFreezerLog: foodItem => dispatch(createFreezerLog(foodItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
