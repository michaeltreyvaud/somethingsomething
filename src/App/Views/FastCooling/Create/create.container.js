import { connect } from 'react-redux';
import Create from './create';
import { createFastCooling } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.fastCooling.create.loading,
  success: state.fastCooling.create.success,
  foodItems: state.foodItem.index.items,
  user: state.user.profile.index.user,
});

const mapDispatchToProps = dispatch => ({
  createFastCooling: fastCooling => dispatch(createFastCooling(fastCooling)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
