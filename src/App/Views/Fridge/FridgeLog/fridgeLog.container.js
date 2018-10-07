import { connect } from 'react-redux';
import FridgeLog from './fridgeLog';
import { listFridgeLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fridge.log.index.loading,
  items: state.fridge.log.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFridgeLogs: () => dispatch(listFridgeLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeLog);
