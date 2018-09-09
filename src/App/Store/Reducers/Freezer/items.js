import { combineReducers } from 'redux';

import index from '../../../Views/Freezer/FreezerItem/Store/Reducers';
import create from '../../../Views/Freezer/FreezerItem/Store/Reducers/create';
import del from '../../../Views/Freezer/FreezerItem/Store/Reducers/delete';
import update from '../../../Views/Freezer/FreezerItem/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
