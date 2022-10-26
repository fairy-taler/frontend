import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer } from "./memberModules/memberModule"; 

const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer
});

export default rootReducer;
