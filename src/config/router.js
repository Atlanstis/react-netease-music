import {
  Discovery,
  SongSheet,
  LatestMusic,
  RadioStation,
  RankList,
  Singer,
} from "@/views/home";
const HOME_PREFIX = "/home/";
export default {
  home: [
    {
      path: `${HOME_PREFIX}discovery`,
      name: "个性推荐",
      component: Discovery,
    },
    {
      path: `${HOME_PREFIX}song-sheet`,
      name: "歌单",
      component: SongSheet,
    },
    {
      path: `${HOME_PREFIX}radio-station`,
      name: "主播电台",
      component: RadioStation,
    },
    {
      path: `${HOME_PREFIX}rank-list`,
      name: "排行榜",
      component: RankList,
    },
    {
      path: `${HOME_PREFIX}singer`,
      name: "歌手",
      component: Singer,
    },
    {
      path: `${HOME_PREFIX}latset-music`,
      name: "最新音乐",
      component: LatestMusic,
    },
  ],
};
