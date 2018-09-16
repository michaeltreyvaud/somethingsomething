import { combineReducers } from 'redux';
import index from '../../../Views/HotHolding/Store/Reducers';
import create from '../../../Views/HotHolding/Store/Reducers/create';

const reducer = combineReducers({
  index,
  create,
});

export default reducer;
