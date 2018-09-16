import { connect } from 'react-redux';
import Create from './create';
import { createHotHolding } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.hotHolding.create.loading,
  success: state.hotHolding.create.success,
  foodItems: state.foodItem.index.items,
  users: state.management.users.index.items,
});

const mapDispatchToProps = dispatch => ({
  createHotHolding: hotHolding => dispatch(createHotHolding(hotHolding)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
