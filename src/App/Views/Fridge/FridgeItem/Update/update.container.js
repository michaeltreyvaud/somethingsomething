import { connect } from 'react-redux';
import Update from './update';
import { updateFridge } from '../Store/Actions/update';

const findItem = (state, id) => (state.fridge.item.index.items
  .find(item => (item.id === id)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.fridge.item.index.loading,
  updating: state.fridge.item.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFridge: item => dispatch(updateFridge(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
