import { connect } from 'react-redux';
import Update from './update';
import { updateFridge } from '../Store/Actions/update';

const mapStateToProps = state => ({
  loading: state.fridge.item.update.loading,
  success: state.fridge.item.update.success,
});

const mapDispatchToProps = dispatch => ({
  updateFridge: (item, index) => dispatch(updateFridge(item, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
