import { connect } from 'react-redux';
import Category from './category';
import { listChecklistCategory } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.checklist.category.index.loading,
  items: state.checklist.category.index.items,
});

const mapDispatchToProps = dispatch => ({
  listChecklistCategory: () => dispatch(listChecklistCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
