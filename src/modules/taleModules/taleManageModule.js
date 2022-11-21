import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    taleList : null
  }

export const SET_TALE_LIST = "tale/SET_TALE_LIST";


const actions = createActions({
  [SET_TALE_LIST]: () => {},
});

export const taleManageReducer = handleActions(
  {
    [SET_TALE_LIST]: (state, { payload }) => {
      state = {...state, taleList : payload}
      return { ...state };
    },
  },
  initialState
);
