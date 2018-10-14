import { connect } from 'react-redux';
import Update from './update';
import { updateReport } from '../Store/Actions/update';

const findItem = (state, createdAt) => (state.report.index.items
  .find(item => (item.createdAt === parseInt(createdAt, 10))));

const mapStateToProps = (state, ownProps) => ({
  item: findItem(state, ownProps.match.params.id),
  loading: state.report.index.loading,
  updating: state.report.update.loading,
});

const mapDispatchToProps = dispatch => ({
  updateReport: item => dispatch(updateReport(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Update);
