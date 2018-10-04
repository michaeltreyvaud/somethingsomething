import { connect } from 'react-redux';
import FoodItem from './foodItem';
import { listFoodItems } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.foodItem.index.loading,
  items: state.foodItem.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFoodItems: () => dispatch(listFoodItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodItem);
