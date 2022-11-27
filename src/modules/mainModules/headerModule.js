import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";
import { createActions, handleActions } from "redux-actions";

const initialState = 
  {
    color : "white",
    clicked : false,
    hasLogo : true,
    backgroundColor : "none",
  }

export const ON_BLACK = "header/ON_BLACK";
export const ON_WHITE = "header/ON_WHITE";
export const OFF_LOGO = "header/OFF_LOGO";
export const ON_CLICK = "header/ON_CLICK";

export const UPDATE_BACKGROUND_COLOR = "header/UPDATE_BACKGROUND_COLOR";

const actions = createActions({
  [ON_BLACK]: () => {},
  [ON_WHITE]: () => {},
  [ON_CLICK]: () => {},
  [OFF_LOGO]: () => {},
  [UPDATE_BACKGROUND_COLOR]: () => {},
  
});

export const headerReducer = handleActions(
  {
    [ON_BLACK]: (state, { payload }) => {
      state.color = "black";
      state.hasLogo = true;
      return { ...state };
    },
    [ON_WHITE]: (state, { payload }) => {
      state.color = "white";
      return { ...state };
    },
    [ON_CLICK]: (state, { payload }) => {
      state.clicked = payload;
      return { ...state };
    },
    [OFF_LOGO]: (state, { payload }) => {
      state.hasLogo = false;
      return { ...state };
      },
    [UPDATE_BACKGROUND_COLOR]: (state, { payload }) => {
      state.backgroundColor = payload;
      return { ...state };
      }
  },
  initialState
);
