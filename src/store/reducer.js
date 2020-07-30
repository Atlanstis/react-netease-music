import { combineReducers } from "redux-immutable";
import { reducer as userReducer } from "./modules/user";
import { reducer as recommendReducer } from "@/views/home/recommend/store";

export default combineReducers({
  user: userReducer,
  recommend: recommendReducer,
});
