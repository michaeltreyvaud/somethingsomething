import { connect } from 'react-redux';
import Pest from './pest';
import { listPests } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.pest.index.loading,
  items: state.pest.index.items,
});

const mapDispatchToProps = dispatch => ({
  listPests: () => dispatch(listPests()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pest);
