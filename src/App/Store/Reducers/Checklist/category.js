import { combineReducers } from 'redux';

import index from '../../../Views/CheckList/Category/Store/Reducers';
import create from '../../../Views/CheckList/Category/Store/Reducers/create';
import update from '../../../Views/CheckList/Category/Store/Reducers/update';
import del from '../../../Views/CheckList/Category/Store/Reducers/delete';

const combinedReducer = combineReducers({
  index,
  create,
  update,
  delete: del,
});

export default combinedReducer;
