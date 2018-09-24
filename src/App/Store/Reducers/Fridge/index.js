import { combineReducers } from 'redux';
import itemsReducer from './items';
import logsReducer from './logs';

const reducer = combineReducers({
  item: itemsReducer,
  log: logsReducer,
});

export default reducer;
