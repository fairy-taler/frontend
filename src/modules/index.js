import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer } from "./memberModules/memberModule"; 

const rootReducer = combineReducers({
  headerReducer,
  joinReducer
});

export default rootReducer;
