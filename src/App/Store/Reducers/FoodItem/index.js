import { combineReducers } from 'redux';
import index from '../../../Views/FoodItem/Store/Reducers';
import create from '../../../Views/FoodItem/Store/Reducers/create';
import del from '../../../Views/FoodItem/Store/Reducers/delete';

const reducer = combineReducers({
  index,
  create,
  delete: del,
});

export default reducer;
