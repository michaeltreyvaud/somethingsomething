import { combineReducers } from 'redux';
import create from '../../../Views/Records/Store/Reducers/create';
import index from '../../../Views/Records/Store/Reducers';

const reducer = combineReducers({
  index,
  create,
});

export default reducer;
