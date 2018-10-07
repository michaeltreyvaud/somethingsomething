import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteSafety } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.safety.delete.loading,
  success: state.safety.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteSafety: (createdAt, index) => dispatch(deleteSafety(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
