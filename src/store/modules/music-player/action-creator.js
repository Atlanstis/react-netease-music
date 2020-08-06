import { fromJS } from "immutable";
import * as actionTypes from "./action-types";
import { normalizedSong } from "@/utils/business";

export const setVolumeAction = (volume) => {
  return {
    type: actionTypes.SET_VOLUME,
    volume,
  };
};

export const setPlayingStateAction = (state) => {
  return {
    type: actionTypes.SET_PLAYING_STATE,
    state,
  };
};

export const playSongAction = (song, list, type, origin) => {
  return (dispatch) => {
    const songNomalized = fromJS(normalizedSong(song));
    const listNomalized = fromJS(normalizedSong(list));
    dispatch(setPlayingStateAction(true));
    dispatch(setCurrentSongAction(songNomalized));
    dispatch(setPlayHistoryAction(songNomalized));
    dispatch(setPlayListAction(listNomalized, type));
  };
};

export const setCurrentSongAction = (song) => {
  return {
    type: actionTypes.SET_CURRENT_SONG,
    song,
  };
};

const setPlayHistoryAction = (song) => {
  return {
    type: actionTypes.SET_PLAY_HISTORY,
    song,
  };
};

export const setCurrentTimeAction = (time) => {
  return {
    type: actionTypes.SET_CURRENT_TIME,
    time,
  };
};

const setPlayListAction = (list, addType) => {
  return {
    type: actionTypes.SET_PLAY_LIST,
    list,
    addType,
  };
};
