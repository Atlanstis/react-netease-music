import * as actionTypes from "./action-types";
import { genSongPlayUrl } from "@/utils/common.js";

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

export const playSongAction = (song) => {
  return (dispatch) => {
    const songNomalized = {
      id: song.id,
      picUrl: song.picUrl,
      name: song.name,
      url: genSongPlayUrl(song.id),
      durationSec: song.song.duration / 1000,
      artists: song.song.artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
        };
      }),
    };
    dispatch(setPlayingStateAction(true));
    dispatch(setCurrentSongAction(songNomalized));
    dispatch(setPlayHistoryAction(songNomalized));
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
