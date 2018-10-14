import { connect } from 'react-redux';
import Update from './update';
import { updatePest } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.pest.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.pest.index.loading,
  updating: state.pest.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updatePest: item => dispatch(updatePest(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
