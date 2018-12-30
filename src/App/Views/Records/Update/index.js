import { connect } from 'react-redux';
import Update from './update';
import { get } from '../Store/Actions/update';

const mapStateToProps = state => ({
  loading: state.records.update.loading,
  item: state.records.index.Items,
});

const mapDispatchToProps = dispatch => ({
  get: (type, createdAt) => dispatch(get(type, createdAt)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
