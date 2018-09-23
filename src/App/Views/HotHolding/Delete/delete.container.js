import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteHotHolding } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.hotHolding.delete.loading,
  success: state.hotHolding.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteHotHolding: (createdAt, index) => dispatch(deleteHotHolding(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
