import { combineReducers } from "redux";
import { headerReducer } from "./mainModules/headerModule";
import { joinReducer, searchReducer, changeReducer } from "./memberModules/memberModule"; 
import { loginReducer } from "./memberModules/loginModule"; 
const rootReducer = combineReducers({
  headerReducer,
  joinReducer,
  searchReducer,
  changeReducer,
  loginReducer
});

export default rootReducer;
