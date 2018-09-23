import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteFastCooling } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.fastCooling.delete.loading,
  success: state.fastCooling.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteFastCooling: (createdAt, index) => dispatch(deleteFastCooling(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
