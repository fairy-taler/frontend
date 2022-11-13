import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer, memberInfoReducer } from "./memberModules/memberModule"; 
import { memberReducer } from "./memberModules/memberAPIModule"; 
import { forumReducer } from "./communityModules/forumModule";
import { profileReducer } from "./memberModules/profileAPIModule";
import { noticeReducer } from "./communityModules/noticeModule";
import { inquiryReducer } from "./communityModules/inquiryModule";
import { faqReducer } from "./communityModules/faqModule";
const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer,
  memberReducer,
  forumReducer,
  profileReducer,
  noticeReducer,
  inquiryReducer,
  faqReducer,
});

export default rootReducer;
