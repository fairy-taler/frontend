import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer, memberInfoReducer } from "./memberModules/memberModule"; 
import { memberReducer } from "./memberModules/memberAPIModule"; 
const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer,
  memberReducer
});

export default rootReducer;
