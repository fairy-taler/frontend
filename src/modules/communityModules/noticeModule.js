import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    noticeList: null,
    notice : null
  }

export const SET_NOTICE_LIST = "forum/SET_NOTICE_LIST";
export const SET_NOTICE = "forum/SET_NOTICE";


const actions = createActions({
  [SET_NOTICE_LIST]: () => {},
  [SET_NOTICE]: () => {}
});

export const noticeReducer = handleActions(
  {
    [SET_NOTICE_LIST]: (state, { payload }) => {
      state = {...state, noticeList : payload}
      return { ...state };
    },
    [SET_NOTICE]: (state, { payload }) => {
      state = {...state, notice : payload}
      return { ...state };
    }
  },
  initialState
);
