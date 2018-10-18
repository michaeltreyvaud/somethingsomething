import { connect } from 'react-redux';
import Create from './create';
import { createChecklistItem } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.checklist.item.create.loading,
  success: state.checklist.item.create.success,
  teams: state.management.team.index.items,
  users: state.management.users.index.items,
  categories: state.checklist.category.index.items,
});

const mapDispatchToProps = dispatch => ({
  createChecklistItem: item => dispatch(createChecklistItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
