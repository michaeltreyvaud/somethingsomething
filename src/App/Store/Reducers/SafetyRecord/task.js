import { combineReducers } from 'redux';

import index from '../../../Views/SafetyRecord/SafetyTask/Store/Reducers';
import create from '../../../Views/SafetyRecord/SafetyTask/Store/Reducers/create';
import del from '../../../Views/SafetyRecord/SafetyTask/Store/Reducers/delete';
import update from '../../../Views/SafetyRecord/SafetyTask/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
