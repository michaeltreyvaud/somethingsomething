import { combineReducers } from 'redux';
import index from '../../../Views/Service/Store/Reducers';
import create from '../../../Views/Service/Store/Reducers/create';
import del from '../../../Views/Service/Store/Reducers/delete';
import update from '../../../Views/Service/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
