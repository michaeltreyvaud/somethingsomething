import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deletesafetyRecordCategory } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.safetyrecord.category.delete.loading,
  success: state.safetyrecord.category.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deletesafetyRecordCategory: (id, index) => dispatch(deletesafetyRecordCategory(id, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
