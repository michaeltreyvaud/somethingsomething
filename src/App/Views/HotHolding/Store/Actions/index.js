import {
  LIST_HOT_HOLDING_ATTEMPT,
  LIST_HOT_HOLDING_SUCCESS,
  LIST_HOT_HOLDING_FAIL,
} from '../ActionTypes';
import { sessionTimeout } from '../../../../Routing/Store/Actions';
import { AuthenticatedFetch } from '../../../../Util/fetch';

const listHotHoldingAttempt = () => ({
  type: LIST_HOT_HOLDING_ATTEMPT,
});

const listHotHoldingSuccess = response => ({
  type: LIST_HOT_HOLDING_SUCCESS,
  payload: {
    response,
  },
});

const listHotHoldingFail = message => ({
  type: LIST_HOT_HOLDING_FAIL,
  payload: { message },
});

export const listHotHoldings = () => async (dispatch) => {
  try {
    dispatch(listHotHoldingAttempt());
    const body = {};
    //  TODO - fetch these
    const { REACT_APP_API_URL, REACT_APP_LIST_HOT_HOLDING_PATH } = process.env;
    const response = await AuthenticatedFetch(`${REACT_APP_API_URL}${REACT_APP_LIST_HOT_HOLDING_PATH}`, body);
    return dispatch(listHotHoldingSuccess(response));
  } catch (_err) {
    if (_err.code === 401) return dispatch(sessionTimeout());
    return dispatch(listHotHoldingFail(_err.message));
  }
};

//  TODO: Remove me
export const a = () => {};
