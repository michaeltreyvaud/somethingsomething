import { combineReducers } from 'redux';

import index from '../../../Views/Management/Suppliers/Store/Reducers';
import update from '../../../Views/Management/Suppliers/Store/Reducers/update';
import del from '../../../Views/Management/Suppliers/Store/Reducers/delete';
import create from '../../../Views/Management/Suppliers/Store/Reducers/create';

const combinedReducer = combineReducers({
  index,
  delete: del,
  update,
  create,
});

export default combinedReducer;
