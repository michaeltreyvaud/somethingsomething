import { combineReducers } from 'redux';
import index from '../../../Views/FoodItem/Store/Reducers';

const freezerReducer = combineReducers({
  index,
});

export default freezerReducer;
