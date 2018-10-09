import { combineReducers } from 'redux';

import create from '../../../Views/Freezer/FreezerTask/Store/Reducers/create';

const combinedReducer = combineReducers({
  create,
});

export default combinedReducer;
