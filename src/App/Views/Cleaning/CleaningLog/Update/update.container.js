import { connect } from 'react-redux';
import Update from './update';
import { updateCleaningLog } from '../Store/Actions/update';
import { createCleaningLog } from '../Store/Actions/create';

const findItem = (state, createdAt) => (state.cleaningItem.log.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.cleaningItem.log.index.loading,
  updating: state.cleaningItem.log.update.loading,
  duplicating: state.cleaningItem.log.create.loading,
});

const mapDispatchToProps = dispatch => ({
  updateCleaningLog: item => dispatch(updateCleaningLog(item)),
  createCleaningLog: item => dispatch(createCleaningLog(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
