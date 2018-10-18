import { combineReducers } from 'redux';

import index from '../../../Views/Cleaning/Cleaning/Store/Reducers';
import create from '../../../Views/Cleaning/Cleaning/Store/Reducers/create';
import del from '../../../Views/Cleaning/Cleaning/Store/Reducers/delete';
import update from '../../../Views/Cleaning/Cleaning/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
