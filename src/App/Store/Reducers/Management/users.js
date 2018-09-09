import { combineReducers } from 'redux';

import index from '../../../Views/Management/Users/Store/Reducers';
import create from '../../../Views/Management/Users/Store/Reducers/create';
import del from '../../../Views/Management/Users/Store/Reducers/delete';
import update from '../../../Views/Management/Users/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
