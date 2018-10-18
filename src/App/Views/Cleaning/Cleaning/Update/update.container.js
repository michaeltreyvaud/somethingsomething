import { connect } from 'react-redux';
import Update from './update';
import { updateCleaningItem } from '../Store/Actions/update';
import { createCleaningItem } from '../Store/Actions/create';

const findItem = (state, createdAt) => (state.cleaningItem.item.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.cleaningItem.item.index.loading,
  updating: state.cleaningItem.item.update.loading,
  duplicating: state.cleaningItem.item.create.loading,
});

const mapDispatchToProps = dispatch => ({
  updateCleaningItem: cleaningItem => dispatch(updateCleaningItem(cleaningItem)),
  createCleaningItem: item => dispatch(createCleaningItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
