import { connect } from 'react-redux';
import Update from './update';
import { updateChecklist } from '../Store/Actions/update';

const findItem = (state, id) => (state.checklist.category.index.items
  .find(item => (item.id === id)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.checklist.category.index.loading,
  updating: state.checklist.category.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateChecklist: item => dispatch(updateChecklist(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
