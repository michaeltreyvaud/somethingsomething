import { connect } from 'react-redux';
import DeleteItem from './delete';
import { deleteMedicalLog } from '../Store/Actions/delete';

const mapStateToProps = state => ({
  loading: state.user.medicalLog.delete.loading,
  success: state.user.medicalLog.delete.success,
});

const mapDispatchToProps = dispatch => ({
  deleteMedicalLog: (createdAt, index) => dispatch(deleteMedicalLog(createdAt, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteItem);
