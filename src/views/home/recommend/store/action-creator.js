import * as actionTypes from "./action-types";
import { getBanner, getPersonalized } from "@/api";

// 获取首页 banner
export const getBannerAction = () => {
  return (dispatch) => {
    getBanner().then(({ banners }) => {
      dispatch(setBanners(banners));
    });
  };
};

export const getRecommSongListAction = () => {
  return (dispatch) => {
    getPersonalized({ limit: 10 }).then(({ result }) => {
      dispatch(setRecommSongList(result));
    });
  };
};

const setRecommSongList = (list) => {
  return {
    type: actionTypes.SET_RECOMM_SONG_LIST,
    list,
  };
};

const setBanners = (list) => {
  return {
    type: actionTypes.SET_BANNERS,
    list,
  };
};
