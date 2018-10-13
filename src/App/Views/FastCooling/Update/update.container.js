import { connect } from 'react-redux';
import Update from './update';
import { updateFastCooling } from '../Store/Actions/update';
import { createFastCooling } from '../Store/Actions/create';

const findItem = (state, createdAt) => (state.fastCooling.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.fastCooling.index.loading,
  updating: state.fastCooling.update.loading,
  duplicating: state.fastCooling.create.loading,
});

const mapDispatchToProps = dispatch => ({
  updateFastCooling: item => dispatch(updateFastCooling(item)),
  createFastCooling: item => dispatch(createFastCooling(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
