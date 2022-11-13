import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    inquiryList: null,
    inquiry : null
  }

export const SET_INQUIRY_LIST = "community/SET_INQUIRY_LIST";
export const SET_INQUIRY = "community/SET_INQUIRY";


const actions = createActions({
  [SET_INQUIRY_LIST]: () => {},
  [SET_INQUIRY]: () => {}
});

export const inquiryReducer = handleActions(
  {
    [SET_INQUIRY_LIST]: (state, { payload }) => {
      state = {...state, inquiryList : payload}
      return { ...state };
    },
    [SET_INQUIRY]: (state, { payload }) => {
      state = {...state, inquiry : payload}
      return { ...state };
    }
  },
  initialState
);
