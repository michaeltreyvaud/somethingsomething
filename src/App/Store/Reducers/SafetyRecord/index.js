import { combineReducers } from 'redux';
import categoryReducer from './category';
import taskReducer from './task';

const reducer = combineReducers({
  category: categoryReducer,
  task: taskReducer,
});

export default reducer;
