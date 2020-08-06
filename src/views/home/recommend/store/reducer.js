import { fromJS } from "immutable";
import * as actionTypes from "./action-types";
const defaultState = fromJS({
  banners: [],
  recommSongList: [],
  latestSongs: [],
  recommMvs: [],
  djProgram: [],
  hasDataLoaded: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_BANNERS:
      return state.merge({
        hasDataLoaded: true,
        banners: fromJS(action.list),
      });
    case actionTypes.SET_RECOMM_SONG_LIST:
      return state.merge({
        hasDataLoaded: true,
        recommSongList: fromJS(action.list),
      });
    case actionTypes.SET_LATEST_SONGS:
      return state.merge({
        hasDataLoaded: true,
        latestSongs: fromJS(action.list),
      });
    case actionTypes.SET_RECOMM_MVS:
      return state.merge({
        hasDataLoaded: true,
        recommMvs: fromJS(action.list),
      });
    case actionTypes.SET_RECOMM_DJ_PROGRAM:
      return state.merge({
        hasDataLoaded: true,
        djProgram: fromJS(action.list),
      });
    default:
      return state;
  }
};
