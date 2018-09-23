import { combineReducers } from 'redux';
import index from '../../../Views/FastCooling/Store/Reducers';
import create from '../../../Views/FastCooling/Store/Reducers/create';
import del from '../../../Views/FastCooling/Store/Reducers/delete';
import update from '../../../Views/FastCooling/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
