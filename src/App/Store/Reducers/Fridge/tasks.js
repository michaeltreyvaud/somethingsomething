import { combineReducers } from 'redux';

import create from '../../../Views/Fridge/FridgeTask/Store/Reducers/create';

const combinedReducer = combineReducers({
  create,
});

export default combinedReducer;
