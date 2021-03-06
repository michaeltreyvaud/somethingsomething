import { connect } from 'react-redux';
import Suppliers from './suppliers';
import { listSuppliers } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.management.suppliers.index.loading,
  items: state.management.suppliers.index.items,
});

const mapDispatchToProps = dispatch => ({
  listSuppliers: () => dispatch(listSuppliers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Suppliers);
