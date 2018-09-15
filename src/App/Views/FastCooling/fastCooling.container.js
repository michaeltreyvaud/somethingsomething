import { connect } from 'react-redux';
import FastCooling from './fastCooling';
import { listFastCoolings } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.fastCooling.index.loading,
  error: state.fastCooling.index.error,
  errorMessage: state.fastCooling.index.errorMessage,
  success: state.fastCooling.index.success,
  items: state.fastCooling.index.items,
});

const mapDispatchToProps = dispatch => ({
  listFastCoolings: () => dispatch(listFastCoolings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FastCooling);
