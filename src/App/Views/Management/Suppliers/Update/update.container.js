import { connect } from 'react-redux';
import Update from './update';
import { updateSupplier } from '../Store/Actions/update';

const findItem = (state, name) => (state.management.suppliers.index.items
  .find(item => (item.name === name)));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.management.suppliers.index.loading,
  updating: state.management.suppliers.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateSupplier: item => dispatch(updateSupplier(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
