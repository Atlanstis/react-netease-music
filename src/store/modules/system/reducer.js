import { fromJS } from "immutable";
import * as actionTypes from "./action-types";

const defaultState = fromJS({
  playListShow: false,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_PLAYLIST_SHOW: {
      return state.merge({
        playListShow: action.state,
      });
    }
    default:
      return state;
  }
};

export default reducer;
