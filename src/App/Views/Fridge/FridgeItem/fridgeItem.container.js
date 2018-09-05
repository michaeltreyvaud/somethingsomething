import { connect } from 'react-redux';
import FridgeItem from './fridgeItem';
import { listFridges } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fridge.item.loading,
  error: state.fridge.item.error,
  errorMessage: state.fridge.item.errorMessage,
  success: state.fridge.item.success,
  items: state.fridge.item.items,
});

const mapDispatchToProps = dispatch => ({
  listFridges: () => dispatch(listFridges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeItem);
