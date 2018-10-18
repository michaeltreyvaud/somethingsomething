import { combineReducers } from 'redux';

import index from '../../../Views/CheckList/Item/Store/Reducers';
import create from '../../../Views/CheckList/Item/Store/Reducers/create';
import del from '../../../Views/CheckList/Item/Store/Reducers/delete';
import update from '../../../Views/CheckList/Item/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
