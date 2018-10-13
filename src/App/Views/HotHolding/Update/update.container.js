import { connect } from 'react-redux';
import Update from './update';
import { updateHotHolding } from '../Store/Actions/update';
import { createHotHolding } from '../Store/Actions/create';

const findItem = (state, createdAt) => (state.hotHolding.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.hotHolding.index.loading,
  updating: state.hotHolding.update.loading,
  duplicating: state.hotHolding.create.loading,
});

const mapDispatchToProps = dispatch => ({
  updateHotHolding: item => dispatch(updateHotHolding(item)),
  createHotHolding: item => dispatch(createHotHolding(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
