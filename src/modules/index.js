import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer, memberInfoReducer } from "./memberModules/memberModule"; 
import { memberReducer } from "./memberModules/memberAPIModule"; 
import { profileReducer } from "./memberModules/profileAPIModule";
const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer,
  memberReducer,
  profileReducer
});

export default rootReducer;
