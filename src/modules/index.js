import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer, memberInfoReducer } from "./memberModules/memberModule"; 
import { memberReducer } from "./memberModules/memberAPIModule"; 
import { forumReducer } from "./communityModules/forumModule";
import { profileReducer } from "./memberModules/profileAPIModule";
const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer,
  memberReducer,
  forumReducer,
  profileReducer
});

export default rootReducer;
