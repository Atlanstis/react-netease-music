import * as actionTypes from "./action-types";
import {
  getBanner,
  getPersonalized,
  getLatestSongs,
  getPersonalizedMv,
} from "@/api";

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

export const getLatestSongsAction = () => {
  return (dispatch) => {
    getLatestSongs().then(({ result }) => {
      dispatch(setLatestSongs(result));
    });
  };
};
const setLatestSongs = (list) => {
  return {
    type: actionTypes.SET_LATEST_SONGS,
    list,
  };
};

export const getRecommMvsAction = () => {
  return (dispatch) => {
    getPersonalizedMv().then(({ result }) => {
      dispatch(setRecommMvs(result));
    });
  };
};
const setRecommMvs = (list) => {
  return {
    type: actionTypes.SET_RECOMM_MVS,
    list,
  };
};
