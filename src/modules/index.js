import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";


const rootReducer = combineReducers({
  headerReducer
});

export default rootReducer;
