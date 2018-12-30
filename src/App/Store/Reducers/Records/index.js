import { combineReducers } from 'redux';
import index from '../../../Views/Records/Store/Reducers';
import create from '../../../Views/Records/Store/Reducers/create';
import del from '../../../Views/Records/Store/Reducers/delete';

const reducer = combineReducers({
  index,
  create,
  delete: del,
});

export default reducer;
