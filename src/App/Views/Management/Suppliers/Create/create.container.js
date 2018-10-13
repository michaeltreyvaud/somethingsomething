import { connect } from 'react-redux';
import Create from './create';
import { createSupplier } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.management.suppliers.create.loading,
  success: state.management.suppliers.create.success,
});

const mapDispatchToProps = dispatch => ({
  createSupplier: item => dispatch(createSupplier(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
