import { connect } from 'react-redux';
import FoodItem from './foodItem';
import { listFoodItems } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.foodItem.index.loading,
  error: state.foodItem.index.error,
  errorMessage: state.foodItem.index.errorMessage,
  success: state.foodItem.index.success,
  items: state.foodItem.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFoodItems: () => dispatch(listFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
