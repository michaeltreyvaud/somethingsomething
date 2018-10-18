import { combineReducers } from 'redux';

import index from '../../../Views/SafetyRecord/Category/Store/Reducers';
import create from '../../../Views/SafetyRecord/Category/Store/Reducers/create';
import update from '../../../Views/SafetyRecord/Category/Store/Reducers/update';
import del from '../../../Views/SafetyRecord/Category/Store/Reducers/delete';

const combinedReducer = combineReducers({
  index,
  create,
  update,
  delete: del,
});

export default combinedReducer;
