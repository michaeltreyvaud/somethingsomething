import { connect } from 'react-redux';
import Update from './update';
import { updateHotHolding } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.hotHolding.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.hotHolding.index.loading,
  updating: state.hotHolding.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateHotHolding: item => dispatch(updateHotHolding(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
