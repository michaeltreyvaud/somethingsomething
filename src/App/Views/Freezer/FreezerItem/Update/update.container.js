import { connect } from 'react-redux';
import Update from './update';
import { updateFreezer } from '../Store/Actions/update';

const findItem = (state, id) => (state.freezer.item.index.items
  .find(item => (item.id === id)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.freezer.item.index.loading,
  updating: state.freezer.item.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFreezer: item => dispatch(updateFreezer(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
