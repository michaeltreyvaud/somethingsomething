import { combineReducers } from 'redux';

import index from '../../../Views/Freezer/FreezerLog/Store/Reducers';
import create from '../../../Views/Freezer/FreezerLog/Store/Reducers/create';
import del from '../../../Views/Freezer/FreezerLog/Store/Reducers/delete';
import update from '../../../Views/Freezer/FreezerLog/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
