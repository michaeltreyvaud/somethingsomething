import { connect } from 'react-redux';
import FoodDelivery from './records';

const mapStateToProps = state => ({
  loading: state.foodItem.index.loading,
  items: [],
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(FoodDelivery);
