import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteFridge } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.fridge.delete.loading,
  success: state.fridge.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteFridge: (id, index) => dispatch(deleteFridge(id, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
