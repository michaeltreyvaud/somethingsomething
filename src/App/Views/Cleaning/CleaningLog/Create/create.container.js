import { connect } from 'react-redux';
import Create from './create';
import { createCleaningLog } from '../Store/Actions/create';

const mapStateToProps = state => ({
  loading: state.cleaningItem.log.create.loading,
  success: state.cleaningItem.log.create.success,
  cleaningItem: state.cleaningItem.item.index.items,
  user: state.user.profile.index.user,
});

const mapDispatchToProps = dispatch => ({
  createCleaningLog: cleaningLog => dispatch(createCleaningLog(cleaningLog)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
