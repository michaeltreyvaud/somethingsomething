import { connect } from 'react-redux';
import Create from './create';
import { createCleaningItem } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.cleaningItem.item.create.loading,
  success: state.cleaningItem.item.create.success,
  user: state.user.profile.index.user,
});

const mapDispatchToProps = dispatch => ({
  createCleaningItem: cleaningItem => dispatch(createCleaningItem(cleaningItem)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
