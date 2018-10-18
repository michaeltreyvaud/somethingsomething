import { connect } from 'react-redux';
import Create from './create';
import { createChecklist } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.checklist.category.create.loading,
  success: state.checklist.category.create.success,
});

const mapDispatchToProps = dispatch => ({
  createChecklist: item => dispatch(createChecklist(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
