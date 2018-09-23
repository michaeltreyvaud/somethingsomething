import { combineReducers } from 'redux';
import index from '../../../Views/FoodItem/Store/Reducers';
import create from '../../../Views/FoodItem/Store/Reducers/create';
import del from '../../../Views/FoodItem/Store/Reducers/delete';
import update from '../../../Views/FoodItem/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
