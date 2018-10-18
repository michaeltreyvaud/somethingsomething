import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteChecklist } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.checklist.category.delete.loading,
  success: state.checklist.category.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteChecklist: (id, index) => dispatch(deleteChecklist(id, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
