import { combineReducers } from 'redux';

import index from '../../../Views/Management/Teams/Store/Reducers';
import create from '../../../Views/Management/Teams/Store/Reducers/create';
import del from '../../../Views/Management/Teams/Store/Reducers/delete';
import update from '../../../Views/Management/Teams/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
