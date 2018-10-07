import { combineReducers } from 'redux';
import index from '../../../Views/PestControl/Store/Reducers';
import create from '../../../Views/PestControl/Store/Reducers/create';
import del from '../../../Views/PestControl/Store/Reducers/delete';
import update from '../../../Views/PestControl/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
