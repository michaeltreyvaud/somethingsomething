import { combineReducers } from 'redux';

import index from '../../../Views/Fridge/FridgeLog/Store/Reducers';
import create from '../../../Views/Fridge/FridgeLog/Store/Reducers/create';
import del from '../../../Views/Fridge/FridgeLog/Store/Reducers/delete';
import update from '../../../Views/Fridge/FridgeLog/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
