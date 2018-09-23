import { connect } from 'react-redux';
import HotHolding from './hotHolding';
import { listHotHoldings } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.hotHolding.index.loading,
  items: state.hotHolding.index.items,
  foodItems: state.foodItem.index.items,
});

const mapDispatchToProps = dispatch => ({
  listHotHoldings: () => dispatch(listHotHoldings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotHolding);
