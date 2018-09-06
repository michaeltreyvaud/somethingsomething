import { connect } from 'react-redux';
import FridgeItem from './fridgeItem';
import { listFridges } from './Store/Actions';
import { createFridge } from './Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.fridge.item.loading,
  error: state.fridge.item.error,
  errorMessage: state.fridge.item.errorMessage,
  success: state.fridge.item.success,
  items: state.fridge.item.items,

  creating: state.fridge.create.loading,
  createError: state.fridge.create.error,
  createErrorMessage: state.fridge.create.errorMessage,
  createSuccess: state.fridge.create.success,

  deleting: state.fridge.delete.loading,
  deleteError: state.fridge.delete.error,
  deleteErrorMessage: state.fridge.delete.errorMessage,
  deleteSuccess: state.fridge.delete.success,
});

const mapDispatchToProps = dispatch => ({
  listFridges: () => dispatch(listFridges()),
  createFridge: (name, description) => dispatch(createFridge(name, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeItem);
