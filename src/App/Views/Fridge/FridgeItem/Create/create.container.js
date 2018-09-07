import { connect } from 'react-redux';
import Create from './create';
import { createFridge } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.fridge.create.loading,
  success: state.fridge.create.success,
});

const mapDispatchToProps = dispatch => ({
  createFridge: (name, description) => dispatch(createFridge(name, description)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
