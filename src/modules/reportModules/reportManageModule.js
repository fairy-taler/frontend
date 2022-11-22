import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    reportList : null,
    report : null
  }

export const SET_REPORT_LIST = "report/SET_REPORT_LIST";
export const SET_REPORT = "report/SET_REPORT";

const actions = createActions({
  [SET_REPORT_LIST]: () => {},
  [SET_REPORT]: () => {},
});

export const reportManageReducer = handleActions(
  {
    [SET_REPORT_LIST]: (state, { payload }) => {
      state = {...state, reportList : payload}
      return { ...state };
    },
    [SET_REPORT]: (state, { payload }) => {
      state = {...state, report : payload}
      return { ...state };
    },
  },
  initialState
);
