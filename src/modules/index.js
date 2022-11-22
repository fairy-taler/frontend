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
import { taleReducer } from "./taleModules/taleAPIModule";
import { taleManageReducer } from "./taleModules/taleManageModule";
import { memberListReducer } from "./memberModules/memberAPIModule"; 
import { reportManageReducer } from "./reportModules/reportManageModule";
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
  taleReducer,
  taleManageReducer,
  memberListReducer,
  reportManageReducer,
});

export default rootReducer;
