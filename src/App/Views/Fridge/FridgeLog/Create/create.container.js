import { connect } from 'react-redux';
import Create from './create';
import { createFridgeLog } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.fridge.log.create.loading,
  success: state.fridge.log.create.success,
  user: state.user.profile.index.user,
  fridgeItems: state.fridge.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  createFridgeLog: foodItem => dispatch(createFridgeLog(foodItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
