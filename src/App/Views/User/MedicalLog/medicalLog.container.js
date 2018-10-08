import { connect } from 'react-redux';
import MedicalLog from './medicalLog';
import { listMedicalLogs } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.user.medicalLog.index.loading,
  success: state.user.medicalLog.index.success,
  items: state.user.medicalLog.index.items,
});

const mapDispatchToProps = dispatch => ({
  listMedicalLogs: () => dispatch(listMedicalLogs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MedicalLog);
