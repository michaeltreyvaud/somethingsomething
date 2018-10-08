import { connect } from 'react-redux';
import Update from './update';
import { updateMedicalLog } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.user.medicalLog.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.user.medicalLog.index.loading,
  updating: state.user.medicalLog.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateMedicalLog: item => dispatch(updateMedicalLog(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
