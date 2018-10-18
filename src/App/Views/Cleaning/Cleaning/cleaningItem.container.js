import { connect } from 'react-redux';
import CleaningItem from './cleaningItem';
import { listCleaningItems } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.cleaningItem.item.index.loading,
  items: state.cleaningItem.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listCleaningItems: () => dispatch(listCleaningItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CleaningItem);
