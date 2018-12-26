import { combineReducers } from 'redux';
import itemsReducer from './items';
import tasksReducer from './tasks';

const reducer = combineReducers({
  item: itemsReducer,
  task: tasksReducer,
});

export default reducer;
