import { connect } from 'react-redux';
import CleaningLog from './cleaningLog';
import { listCleaningLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.cleaningItem.log.index.loading,
  items: state.cleaningItem.log.index.items,
  cleaningItem: state.cleaningItem.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listCleaningLogs: () => dispatch(listCleaningLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CleaningLog);
