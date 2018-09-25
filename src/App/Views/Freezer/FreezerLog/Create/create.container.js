import { connect } from 'react-redux';
import Create from './create';
import { createFreezerLog } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.freezer.log.create.loading,
  success: state.freezer.log.create.success,
});

const mapDispatchToProps = dispatch => ({
  createFreezerLog: freezerLog => dispatch(createFreezerLog(freezerLog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
