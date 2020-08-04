import * as actionTypes from "./action-types";

export const setVolumeAction = (volume) => {
  return {
    type: actionTypes.SET_VOLUME,
    volume,
  };
};

export const setPlayingState = (state) => {
  return {
    type: actionTypes.SET_PLAYING_STATE,
    state,
  };
};
