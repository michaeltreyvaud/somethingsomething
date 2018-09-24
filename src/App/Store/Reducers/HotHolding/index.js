import { combineReducers } from 'redux';
import index from '../../../Views/HotHolding/Store/Reducers';
import create from '../../../Views/HotHolding/Store/Reducers/create';
import del from '../../../Views/HotHolding/Store/Reducers/delete';
import update from '../../../Views/HotHolding/Store/Reducers/update';

const reducer = combineReducers({
  index,
  create,
  delete: del,
  update,
});

export default reducer;
