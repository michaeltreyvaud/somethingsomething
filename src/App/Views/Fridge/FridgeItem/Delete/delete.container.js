import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteFridge } from '../Store/Actions/delete';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  deleteFridge: (id, index) => dispatch(deleteFridge(id, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
