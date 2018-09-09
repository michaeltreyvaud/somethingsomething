import { combineReducers } from 'redux';
import itemsReducer from './items';

const freezerReducer = combineReducers({
  item: itemsReducer,
});

export default freezerReducer;
