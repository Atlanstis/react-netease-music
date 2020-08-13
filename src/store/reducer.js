import { combineReducers } from "redux-immutable";
import { reducer as userReducer } from "./modules/user";
import { reducer as musicPlayerReducer } from "./modules/music-player";
import { reducer as recommendReducer } from "@/views/home/recommend/store";
import { reducer as systemReducer } from "./modules/system";

export default combineReducers({
  user: userReducer,
  musicPlayer: musicPlayerReducer,
  recommend: recommendReducer,
  system: systemReducer,
});
