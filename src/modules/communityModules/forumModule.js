import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    forumList: null
  }

export const SET_FORUM_LIST = "forum/SET_FORUM_LIST";


const actions = createActions({
  [SET_FORUM_LIST]: () => {}
  
});

export const forumReducer = handleActions(
  {
    [SET_FORUM_LIST]: (state, { payload }) => {
      state = {...state, forumList : payload}
      return { ...state };
    }
  },
  initialState
);
