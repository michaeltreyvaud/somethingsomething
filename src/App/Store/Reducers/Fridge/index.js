import { combineReducers } from 'redux';
import itemsReducer from './items';

const fridgeReducer = combineReducers({
  item: itemsReducer,
});

export default fridgeReducer;
