import * as actionTypes from "./action-types";

export const setPlayListShow = (state) => {
  return {
    type: actionTypes.SET_PLAYLIST_SHOW,
    state,
  };
};
