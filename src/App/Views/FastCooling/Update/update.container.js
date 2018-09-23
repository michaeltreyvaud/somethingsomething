import { connect } from 'react-redux';
import Update from './update';
import { updateFastCooling } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.fastCooling.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.fastCooling.index.loading,
  updating: state.fastCooling.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFastCooling: item => dispatch(updateFastCooling(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
