import * as actionTypes from "./action-types";
import { getBanner } from "@/api";

// 获取首页 banner
export const getBannerAction = () => {
  return (dispatch) => {
    getBanner().then(({ banners }) => {
      dispatch(setBanners(banners));
    });
  };
};

const setBanners = (list) => {
  return {
    type: actionTypes.SET_BANNERS,
    list,
  };
};
