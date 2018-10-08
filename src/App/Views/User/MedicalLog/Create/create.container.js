import { connect } from 'react-redux';
import Create from './create';
import { createMedicalLog } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.user.medicalLog.create.loading,
  success: state.user.medicalLog.create.success,
});

const mapDispatchToProps = dispatch => ({
  createMedicalLog: item => dispatch(createMedicalLog(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
