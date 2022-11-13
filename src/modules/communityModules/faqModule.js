import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    faqList: null,
    faq : null
  }

export const SET_FAQ_LIST = "community/SET_FAQ_LIST";
export const SET_FAQ = "community/SET_FAQ";


const actions = createActions({
  [SET_FAQ_LIST]: () => {},
  [SET_FAQ]: () => {}
});

export const faqReducer = handleActions(
  {
    [SET_FAQ_LIST]: (state, { payload }) => {
      state = {...state, faqList : payload}
      return { ...state };
    },
    [SET_FAQ]: (state, { payload }) => {
      state = {...state, faq : payload}
      return { ...state };
    }
  },
  initialState
);
