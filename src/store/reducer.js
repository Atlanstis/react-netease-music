import { combineReducers } from "redux-immutable";
import { reducer as userReducer } from "./modules/user";

export default combineReducers({
  reducer: userReducer,
});
