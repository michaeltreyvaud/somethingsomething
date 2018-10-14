import { combineReducers } from 'redux';

import index from '../../../Views/Freezer/FreezerTask/Store/Reducers';
import create from '../../../Views/Freezer/FreezerTask/Store/Reducers/create';

const combinedReducer = combineReducers({
  index,
  create,
});

export default combinedReducer;
