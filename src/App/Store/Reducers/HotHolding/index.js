import { combineReducers } from 'redux';
import index from '../../../Views/HotHolding/Store/Reducers';
import create from '../../../Views/HotHolding/Store/Reducers/create';
import del from '../../../Views/HotHolding/Store/Reducers/delete';

const reducer = combineReducers({
  index,
  create,
  delete: del,
});

export default reducer;
