import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteFoodItem } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.foodItem.delete.loading,
  success: state.foodItem.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteFoodItem: (createdAt, index) => dispatch(deleteFoodItem(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
