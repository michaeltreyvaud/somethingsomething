import { connect } from 'react-redux';
import Update from './update';
import { updateFreezerLog } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.freezer.log.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.freezer.log.index.items.loading,
  updating: state.freezer.log.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFreezerLog: freezerLog => dispatch(updateFreezerLog(freezerLog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
