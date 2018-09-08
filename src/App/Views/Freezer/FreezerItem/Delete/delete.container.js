import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteFreezer } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.freezer.item.delete.loading,
  success: state.freezer.item.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteFreezer: (id, index) => dispatch(deleteFreezer(id, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
