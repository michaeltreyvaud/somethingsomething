import { connect } from 'react-redux';
import Create from './create';
import { createFoodItem } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.foodItem.create.loading,
  success: state.foodItem.create.success,
  user: state.user.profile.index.user,
});

const mapDispatchToProps = dispatch => ({
  createFoodItem: foodItem => dispatch(createFoodItem(foodItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
