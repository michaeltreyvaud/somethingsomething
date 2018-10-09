import { combineReducers } from 'redux';
import itemsReducer from './items';
import logsReducer from './logs';
import tasksReducer from './tasks';

const reducer = combineReducers({
  item: itemsReducer,
  log: logsReducer,
  task: tasksReducer,
});

export default reducer;
