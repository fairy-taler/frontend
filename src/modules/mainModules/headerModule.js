import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    color : "white",
    clicked : false,
    isLogo : true,
  }

export const ON_BLACK = "header/ON_BLACK";
export const ON_WHITE = "header/ON_WHITE";


export const ON_CLICK = "header/ON_CLICK";

const actions = createActions({
  [ON_BLACK]: () => {},
  [ON_WHITE]: () => {},
  [ON_CLICK]: () => {},
  
});

export const headerReducer = handleActions(
  {
    [ON_BLACK]: (state, { payload }) => {
      state.color = "black";
      return { ...state };
    },
    [ON_WHITE]: (state, { payload }) => {
      state.color = "white";
      return { ...state };
    },
    [ON_CLICK]: (state, { payload }) => {
    state.clicked = payload;
    return { ...state };
    }
  },
  initialState
);
