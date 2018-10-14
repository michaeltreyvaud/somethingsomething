import { combineReducers } from 'redux';

import index from '../../../Views/Fridge/FridgeTask/Store/Reducers';
import create from '../../../Views/Fridge/FridgeTask/Store/Reducers/create';

const combinedReducer = combineReducers({
  index,
  create,
});

export default combinedReducer;
