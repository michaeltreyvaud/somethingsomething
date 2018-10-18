import { connect } from 'react-redux';
import Services from './services';
import { listServices } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.services.index.loading,
  items: state.services.index.items,
  foodItems: state.foodItem.index.items,
});

const mapDispatchToProps = dispatch => ({
  listServices: () => dispatch(listServices()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Services);
