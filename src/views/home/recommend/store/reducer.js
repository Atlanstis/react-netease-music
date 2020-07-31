import { fromJS } from "immutable";
import * as actionTypes from "./action-types";
const defaultState = fromJS({
  banners: [],
  recommSongList: [],
  latestSongs: [],
  recommMvs: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_BANNERS:
      return state.merge({
        banners: fromJS(action.list),
      });
    case actionTypes.SET_RECOMM_SONG_LIST:
      return state.merge({
        recommSongList: fromJS(action.list),
      });
    case actionTypes.SET_LATEST_SONGS:
      return state.merge({
        latestSongs: fromJS(action.list),
      });
    case actionTypes.SET_RECOMM_MVS:
      return state.merge({
        recommMvs: fromJS(action.list),
      });
    default:
      return state;
  }
};
