import { combineReducers } from 'redux';
import index from '../../../Views/Records/Store/Reducers';
import create from '../../../Views/Records/Store/Reducers/create';
import del from '../../../Views/Records/Store/Reducers/delete';
import update from '../../../Views/Records/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
