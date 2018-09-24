import { connect } from 'react-redux';
import Update from './update';
import { updateFridgeLog } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.fridge.log.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.fridge.log.index.items.loading,
  updating: state.fridge.log.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFridgeLog: fridgeLog => dispatch(updateFridgeLog(fridgeLog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
