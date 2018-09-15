import { connect } from 'react-redux';
import HotHolding from './hotHolding';
import { listHotHoldings } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.hotHolding.index.loading,
  error: state.hotHolding.index.error,
  errorMessage: state.hotHolding.index.errorMessage,
  success: state.hotHolding.index.success,
  items: state.hotHolding.index.items,
});

const mapDispatchToProps = dispatch => ({
  listHotHoldings: () => dispatch(listHotHoldings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HotHolding);
