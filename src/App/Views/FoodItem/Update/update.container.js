import { connect } from 'react-redux';
import Update from './update';
import { updateFoodItem } from '../Store/Actions/update';
import { createFoodItem } from '../Store/Actions/create';

const findItem = (state, createdAt) => (state.foodItem.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.foodItem.index.loading,
  updating: state.foodItem.update.loading,
  duplicating: state.foodItem.create.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFoodItem: foodItem => dispatch(updateFoodItem(foodItem)),
  createFoodItem: item => dispatch(createFoodItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
