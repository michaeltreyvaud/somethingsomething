import { connect } from 'react-redux';
import Create from './create';
import { createSafetyRecordCategory } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.safetyrecord.category.create.loading,
  success: state.safetyrecord.category.create.success,
});

const mapDispatchToProps = dispatch => ({
  createSafetyRecordCategory: item => dispatch(createSafetyRecordCategory(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
