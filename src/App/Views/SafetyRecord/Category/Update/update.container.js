import { connect } from 'react-redux';
import Update from './update';
import { updatesafetyRecordCategory } from '../Store/Actions/update';

const findItem = (state, id) => (state.safetyrecord.category.index.items
  .find(item => (item.id === id)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.safetyrecord.category.index.loading,
  updating: state.safetyrecord.category.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updatesafetyRecordCategory: item => dispatch(updatesafetyRecordCategory(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
