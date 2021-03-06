import { connect } from 'react-redux';
import Create from './create';
import { createFreezer } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.freezer.item.create.loading,
  success: state.freezer.item.create.success,
});

const mapDispatchToProps = dispatch => ({
  createFreezer: freezerItem => dispatch(createFreezer(freezerItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
