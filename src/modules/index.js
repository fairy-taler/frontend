import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer } from "./memberModules/memberModule"; 

const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer
});

export default rootReducer;
