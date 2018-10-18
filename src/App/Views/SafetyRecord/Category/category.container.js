import { connect } from 'react-redux';
import Category from './category';
import { listsafetyRecordCategoryCategory } from './Store/Actions';

const mapStateToProps = state => ({
  loading: state.safetyrecord.category.index.loading,
  items: state.safetyrecord.category.index.items,
});

const mapDispatchToProps = dispatch => ({
  listsafetyRecordCategoryCategory: () => dispatch(listsafetyRecordCategoryCategory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
