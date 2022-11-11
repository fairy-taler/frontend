import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    forumList: null,
    forum : null
  }

export const SET_FORUM_LIST = "forum/SET_FORUM_LIST";
export const SET_FORUM = "forum/SET_FORUM";


const actions = createActions({
  [SET_FORUM_LIST]: () => {},
  [SET_FORUM]: () => {}
});

export const forumReducer = handleActions(
  {
    [SET_FORUM_LIST]: (state, { payload }) => {
      state = {...state, forumList : payload}
      return { ...state };
    },
    [SET_FORUM]: (state, { payload }) => {
      state = {...state, forum : payload}
      return { ...state };
    }
  },
  initialState
);
