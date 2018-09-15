import { combineReducers } from 'redux';
import itemsReducer from './items';

const reducer = combineReducers({
  item: itemsReducer,
});

export default reducer;
