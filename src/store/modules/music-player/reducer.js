import { fromJS } from "immutable";
import storage from "good-storage";
import * as actionTypes from "./action-types";
import { VOLUME_KEY } from "@/config/constants/storage-key";

const defaultState = fromJS({
  volume: storage.get(VOLUME_KEY, 0.75),
  currentSong: null,
  playingState: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_VOLUME:
      let { volume } = action;
      storage.set(VOLUME_KEY, volume);
      return state.merge({
        volume: volume,
      });
    case actionTypes.SET_PLAYING_STATE:
      return state.merge({
        playingState: action.state,
      });
    default:
      return state;
  }
};
