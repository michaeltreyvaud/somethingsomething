import { combineReducers } from 'redux';
import categoryReducer from './category';

const reducer = combineReducers({
  category: categoryReducer,
});

export default reducer;
