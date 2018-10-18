import { combineReducers } from 'redux';

import index from '../../../Views/Cleaning/CleaningLog/Store/Reducers';
import create from '../../../Views/Cleaning/CleaningLog/Store/Reducers/create';
import del from '../../../Views/Cleaning/CleaningLog/Store/Reducers/delete';
import update from '../../../Views/Cleaning/CleaningLog/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
