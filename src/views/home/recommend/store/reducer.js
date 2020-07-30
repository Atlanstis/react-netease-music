import { fromJS } from "immutable";
import * as actionTypes from "./action-types";
const defaultState = fromJS({
  banners: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_BANNERS:
      return state.merge({
        banners: fromJS(action.list),
      });
    default:
      return state;
  }
};
