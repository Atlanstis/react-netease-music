import { fromJS } from "immutable";
import storage from "good-storage";
import * as actionTypes from "./action-types";
import {
  VOLUME_KEY,
  PLAY_HISTORY_KEY,
  LAST_PLAY_SONG_KEY,
  PLAY_LIST_KEY,
} from "@/constants/storage-key";
import { PLAY_LIST_TYPE } from "@/constants/song";

// 播放历史记录最大长度
const PLAY_HISTORY_MAX_LENGTH = 100;

const defaultState = fromJS({
  volume: storage.get(VOLUME_KEY, 0.75),
  currentSong: storage.get(LAST_PLAY_SONG_KEY, {}),
  currentTime: 0,
  playingState: false,
  playList: storage.get(PLAY_LIST_KEY, []),
  playHistoryList: storage.get(PLAY_HISTORY_KEY, []),
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_VOLUME: {
      let { volume } = action;
      storage.set(VOLUME_KEY, volume);
      return state.merge({
        volume: volume,
      });
    }
    case actionTypes.SET_PLAYING_STATE: {
      return state.merge({
        playingState: action.state,
      });
    }
    case actionTypes.SET_CURRENT_SONG: {
      let { song, addType } = action;
      let songNew;
      if (addType === PLAY_LIST_TYPE.REPLACE) {
        songNew = song;
      } else if (addType === PLAY_LIST_TYPE.CLEAN_UP) {
        songNew = fromJS({});
      }
      storage.set(LAST_PLAY_SONG_KEY, songNew.toJS());
      return state.merge({
        currentSong: songNew,
      });
    }
    case actionTypes.SET_CURRENT_TIME: {
      return state.merge({
        currentTime: fromJS(action.time),
      });
    }
    case actionTypes.SET_PLAY_HISTORY: {
      let { song, addType } = action;
      let playHistoryList = state.get("playHistoryList");
      if (addType === PLAY_LIST_TYPE.REPLACE) {
        let findIndex = playHistoryList.findIndex((value) => {
          return value.get("id") === song.get("id");
        });
        if (findIndex > -1) {
          playHistoryList = playHistoryList.delete(findIndex);
        }
        if (playHistoryList.size >= PLAY_HISTORY_MAX_LENGTH) {
          playHistoryList = playHistoryList.slice(
            0,
            PLAY_HISTORY_MAX_LENGTH - 1
          );
        }
        playHistoryList = playHistoryList.unshift(song);
      } else if (addType === PLAY_LIST_TYPE.CLEAN_UP) {
        playHistoryList = fromJS([]);
      }
      storage.set(PLAY_HISTORY_KEY, playHistoryList.toJS());
      return state.merge({
        playHistoryList,
      });
    }
    case actionTypes.SET_PLAY_LIST: {
      let { list, addType } = action;
      let playList;
      if (addType === PLAY_LIST_TYPE.REPLACE) {
        playList = list;
      } else if (addType === PLAY_LIST_TYPE.CLEAN_UP) {
        playList = fromJS([]);
      }
      storage.set(PLAY_LIST_KEY, playList.toJS());
      return state.merge({ playList });
    }
    default:
      return state;
  }
};
