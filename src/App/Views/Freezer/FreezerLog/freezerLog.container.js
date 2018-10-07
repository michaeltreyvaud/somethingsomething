import { connect } from 'react-redux';
import FreezerLog from './freezerLog';
import { listFreezerLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.freezer.log.index.loading,
  items: state.freezer.log.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFreezerLogs: () => dispatch(listFreezerLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerLog);
