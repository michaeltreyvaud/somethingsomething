import { connect } from 'react-redux';
import DeleteSupplier from './delete';
import { deleteSupplier } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.management.suppliers.delete.loading,
  success: state.management.suppliers.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteSupplier: (name, index) => dispatch(deleteSupplier(name, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteSupplier);
