import { connect } from 'react-redux';
import FridgeItem from './fridgeItem';
import { listFridges } from './Store/Actions';
import { createFridge } from './Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.fridge.item.index.loading,
  error: state.fridge.item.index.error,
  errorMessage: state.fridge.item.index.errorMessage,
  success: state.fridge.item.index.success,
  items: state.fridge.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFridges: () => dispatch(listFridges()),
  createFridge: (name, description) => dispatch(createFridge(name, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeItem);
