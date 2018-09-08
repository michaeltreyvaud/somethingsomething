import { connect } from 'react-redux';
import FreezerItem from './freezerItem';
import { listFreezers } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.freezer.item.index.loading,
  error: state.freezer.item.index.error,
  errorMessage: state.freezer.item.index.errorMessage,
  success: state.freezer.item.index.success,
  items: state.freezer.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFreezers: () => dispatch(listFreezers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerItem);
