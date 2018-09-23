import { combineReducers } from 'redux';
import index from '../../../Views/FastCooling/Store/Reducers';
import create from '../../../Views/FastCooling/Store/Reducers/create';
import del from '../../../Views/FastCooling/Store/Reducers/delete';

const reducer = combineReducers({
  index,
  create,
  delete: del,
});

export default reducer;
