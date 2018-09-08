import { connect } from 'react-redux';
import FridgeItem from './fridgeItem';
import { listFridges } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fridge.item.index.loading,
  error: state.fridge.item.index.error,
  errorMessage: state.fridge.item.index.errorMessage,
  success: state.fridge.item.index.success,
  items: state.fridge.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFridges: () => dispatch(listFridges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeItem);
