import { connect } from 'react-redux';
import FoodDelivery from './records';
//import { listFoodItems } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.foodItem.index.loading,
  items: state.foodItem.index.items,
});

const mapDispatchToProps = dispatch => ({
  //listFoodItems: () => dispatch(listFoodItems()),
  listFoodItems: () => console.log('TODO'),
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodDelivery);
