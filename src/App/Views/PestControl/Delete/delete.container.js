import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deletePest } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.pest.delete.loading,
  success: state.pest.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deletePest: (createdAt, index) => dispatch(deletePest(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
