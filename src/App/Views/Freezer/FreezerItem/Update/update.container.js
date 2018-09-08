import { connect } from 'react-redux';
import Update from './update';
import { updateFreezer } from '../Store/Actions/update';

const mapStateToProps = state => ({
  loading: state.freezer.item.update.loading,
  success: state.freezer.item.update.success,
});

const mapDispatchToProps = dispatch => ({
  updateFreezer: (item, index) => dispatch(updateFreezer(item, index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
