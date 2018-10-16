import { combineReducers } from 'redux';
import categoryReducer from './category';
import itemsReducer from './items';

const reducer = combineReducers({
  category: categoryReducer,
  item: itemsReducer,
});

export default reducer;
