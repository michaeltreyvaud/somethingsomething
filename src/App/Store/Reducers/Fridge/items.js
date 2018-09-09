import { combineReducers } from 'redux';

import index from '../../../Views/Fridge/FridgeItem/Store/Reducers';
import create from '../../../Views/Fridge/FridgeItem/Store/Reducers/create';
import del from '../../../Views/Fridge/FridgeItem/Store/Reducers/delete';
import update from '../../../Views/Fridge/FridgeItem/Store/Reducers/update';

const combinedReducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default combinedReducer;
