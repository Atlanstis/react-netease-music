// 播放列表添加方式
export const PLAY_LIST_TYPE = {
  ADD: "ADD",
  REPLACE: "REPLACE",
  CLEAN_UP: "CLEAN_UP",
};

// 歌曲来源
export const SONG_ORIGIN = {
  RECOMM: "recomm",
};

// 播放模式
export const PLAY_MODE_MAP = {
  listLoop: {
    code: "listLoop",
    icon: "list-loop",
    name: "列表循环",
  },
  loop: {
    code: "loop",
    icon: "loop",
    name: "单曲循环",
  },
  random: {
    code: "random",
    icon: "random",
    name: "随机播放",
  },
  sequence: {
    code: "sequence",
    icon: "sequence",
    name: "顺序播放",
  },
};

export const PLAY_MODE_CARDIAC = {
  cardiac: {
    code: "cardiac",
    icon: "cardiac",
    name: "心动模式",
  },
};

// 默认播放模式
export const DEFAULT_PLAY_MODE = "listLoop";
