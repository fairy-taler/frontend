import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer, memberInfoReducer } from "./memberModules/memberModule"; 
import { memberReducer } from "./memberModules/memberAPIModule"; 
import { forumReducer } from "./communityModules/forumModule";
import { profileReducer } from "./memberModules/profileAPIModule";
import { profileMemberReducer } from "./memberModules/profileMemberAPIModule";
import { noticeReducer } from "./communityModules/noticeModule";
import { inquiryReducer } from "./communityModules/inquiryModule";
import { faqReducer } from "./communityModules/faqModule";
import { taleManageReducer } from "./taleModules/taleManageModule";
const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer,
  memberReducer,
  forumReducer,
  profileReducer,
  profileMemberReducer,
  noticeReducer,
  inquiryReducer,
  faqReducer,
  taleManageReducer,
});

export default rootReducer;
