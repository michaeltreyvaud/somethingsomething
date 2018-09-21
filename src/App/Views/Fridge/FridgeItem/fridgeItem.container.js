import { connect } from 'react-redux';
import FridgeItem from './fridgeItem';
import { listFridges } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fridge.item.index.loading,
  items: state.fridge.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFridges: () => dispatch(listFridges()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FridgeItem);
