import { combineReducers } from 'redux';
import index from '../../../Views/FastCooling/Store/Reducers';
import create from '../../../Views/FastCooling/Store/Reducers/create';

const reducer = combineReducers({
  index,
  create,
});

export default reducer;
