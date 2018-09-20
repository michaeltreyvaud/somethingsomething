import { connect } from 'react-redux';
import FreezerItem from './freezerItem';
import { listFreezers } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.freezer.item.index.loading,
  items: state.freezer.item.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFreezers: () => dispatch(listFreezers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FreezerItem);
