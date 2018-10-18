import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteCleaningItem } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.cleaningItem.item.delete.loading,
  success: state.cleaningItem.item.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteCleaningItem: (createdAt, index) => dispatch(deleteCleaningItem(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
