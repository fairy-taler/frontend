import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    "taleList" : null,
    "tale" : null,
  }

export const SET_TALE_LIST = "tale/SET_TALE_LIST";
export const SET_TALE = "tale/SET_TALE";


const actions = createActions({
  [SET_TALE_LIST]: () => {},
  [SET_TALE]: () => {},
});

export const taleManageReducer = handleActions(
  {
    [SET_TALE_LIST]: (state, { payload }) => {
      state = {...state, taleList : payload}
      return state;
    },
    [SET_TALE]: (state, { payload }) => {
      state = {...state, tale : payload}
      return state;
    },
  },
  initialState
);
