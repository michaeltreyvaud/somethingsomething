import { connect } from 'react-redux';
import FreezerLog from './freezerLog';
import { listFreezerLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.freezer.log.index.items.loading,
  error: state.freezer.log.index.items.error,
  errorMessage: state.freezer.log.index.items.errorMessage,
  success: state.freezer.log.index.items.success,
  items: state.freezer.log.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFreezerLogs: () => dispatch(listFreezerLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerLog);
