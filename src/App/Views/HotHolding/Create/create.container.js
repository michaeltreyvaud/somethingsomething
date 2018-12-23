import { connect } from 'react-redux';
import Create from './create';
import { createHotHolding } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.hotHolding.create.loading,
  success: state.hotHolding.create.success,
  foodItems: state.foodItem.index.items,
  user: state.user.profile.index.user,
});

const mapDispatchToProps = dispatch => ({
  create: item => dispatch(createHotHolding(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
