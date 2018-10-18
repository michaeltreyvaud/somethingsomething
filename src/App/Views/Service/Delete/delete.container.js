import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteServices } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.services.delete.loading,
  success: state.services.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteServices: (createdAt, index) => dispatch(deleteServices(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
