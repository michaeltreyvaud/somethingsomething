import { combineReducers } from 'redux';
import index from '../../../Views/Reports/Store/Reducers';
import create from '../../../Views/Reports/Store/Reducers/create';
import del from '../../../Views/Reports/Store/Reducers/delete';
import update from '../../../Views/Reports/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
