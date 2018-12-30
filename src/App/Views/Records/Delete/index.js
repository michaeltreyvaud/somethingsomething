import { connect } from 'react-redux';
import Delete from './delete';
import { deleteRecord } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.records.delete.loading,
  success: state.records.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteRecord: item => dispatch(deleteRecord(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Delete);
