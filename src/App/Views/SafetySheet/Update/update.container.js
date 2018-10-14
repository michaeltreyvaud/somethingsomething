import { connect } from 'react-redux';
import Update from './update';
import { updateSafety } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.safety.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.safety.index.loading,
  updating: state.safety.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateSafety: item => dispatch(updateSafety(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
