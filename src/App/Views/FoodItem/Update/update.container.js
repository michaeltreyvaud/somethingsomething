import { connect } from 'react-redux';
import Update from './update';

const findItem = (state, createdAt) => (state.foodItem.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.foodItem.index.loading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
