import { combineReducers } from 'redux';

import index from '../../../Views/Management/Suppliers/Store/Reducers';

const combinedReducer = combineReducers({
  index,
});

export default combinedReducer;
