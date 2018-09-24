import { combineReducers } from 'redux';

import index from '../../../Views/Management/Suppliers/Store/Reducers';
import update from '../../../Views/Management/Suppliers/Store/Reducers/update';
import del from '../../../Views/Management/Suppliers/Store/Reducers/delete';

const combinedReducer = combineReducers({
  index,
  delete: del,
  update,
});

export default combinedReducer;
