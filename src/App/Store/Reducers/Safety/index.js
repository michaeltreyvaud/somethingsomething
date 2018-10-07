import { combineReducers } from 'redux';
import index from '../../../Views/SafetySheet/Store/Reducers';
import create from '../../../Views/SafetySheet/Store/Reducers/create';
import del from '../../../Views/SafetySheet/Store/Reducers/delete';
import update from '../../../Views/SafetySheet/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
