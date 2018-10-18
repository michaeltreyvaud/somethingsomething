import { connect } from 'react-redux';
import Update from './update';
import { updateServices } from '../Store/Actions/update';
import { createServices } from '../Store/Actions/create';

const findItem = (state, createdAt) => (state.services.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.services.index.loading,
  updating: state.services.update.loading,
  duplicating: state.services.create.loading,
});

const mapDispatchToProps = dispatch => ({
  updateServices: item => dispatch(updateServices(item)),
  createServices: item => dispatch(createServices(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
