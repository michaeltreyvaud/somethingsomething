import { combineReducers } from 'redux';

import index from '../../../Views/User/Profile/Store/Reducers';

const combinedReducer = combineReducers({
  index,
});

export default combinedReducer;
