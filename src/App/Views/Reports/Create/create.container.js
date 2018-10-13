import { connect } from 'react-redux';
import Create from './create';
import { createReport } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.report.create.loading,
  success: state.report.create.success,
  user: state.user.profile.index.user,
  users: state.management.users.index.items,
});

const mapDispatchToProps = dispatch => ({
  createReport: item => dispatch(createReport(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
