import { connect } from 'react-redux';
import Safety from './safety';
import { listSafetys } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.safety.index.loading,
  items: state.safety.index.items,
});

const mapDispatchToProps = dispatch => ({
  listSafetys: () => dispatch(listSafetys()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Safety);
