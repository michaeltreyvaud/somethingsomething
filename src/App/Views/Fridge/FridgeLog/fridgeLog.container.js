import { connect } from 'react-redux';
import FridgeLog from './fridgeLog';
import { listFridgeLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fridge.log.index.items.loading,
  error: state.fridge.log.index.items.error,
  errorMessage: state.fridge.log.index.items.errorMessage,
  success: state.fridge.log.index.items.success,
  items: state.fridge.log.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFridgeLogs: () => dispatch(listFridgeLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeLog);
