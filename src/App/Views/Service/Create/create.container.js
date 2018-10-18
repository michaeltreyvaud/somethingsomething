import { connect } from 'react-redux';
import Create from './create';
import { createServices } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.services.create.loading,
  success: state.services.create.success,
  foodItems: state.foodItem.index.items,
  user: state.user.profile.index.user,
});

const mapDispatchToProps = dispatch => ({
  createServices: services => dispatch(createServices(services)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
