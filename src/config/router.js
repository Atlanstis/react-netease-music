import {
  Discovery,
  SongSheet,
  LatestMusic,
  RadioStation,
  RankList,
  Singer,
} from "@/views/home";
import { Video, Mv } from "@/views/video";
import { Trends } from "@/views/friend";
import FM from "@/views/fm";
const HOME_PREFIX = "home";
const VIEDO_PREFIX = "video";
const FRIEND_PREFIX = "friend";
const FM_PREFIX = "fm";

export default {
  [HOME_PREFIX]: [
    {
      path: `/${HOME_PREFIX}/discovery`,
      name: "个性推荐",
      component: Discovery,
    },
    {
      path: `/${HOME_PREFIX}/song-sheet`,
      name: "歌单",
      component: SongSheet,
    },
    {
      path: `/${HOME_PREFIX}/radio-station`,
      name: "主播电台",
      component: RadioStation,
    },
    {
      path: `/${HOME_PREFIX}/rank-list`,
      name: "排行榜",
      component: RankList,
    },
    {
      path: `/${HOME_PREFIX}/singer`,
      name: "歌手",
      component: Singer,
    },
    {
      path: `/${HOME_PREFIX}/latset-music`,
      name: "最新音乐",
      component: LatestMusic,
    },
  ],
  [VIEDO_PREFIX]: [
    { path: `/${VIEDO_PREFIX}/index`, name: "视频", component: Video },
    { path: `/${VIEDO_PREFIX}/mv`, name: "MV", component: Mv },
  ],
  [FRIEND_PREFIX]: [
    { path: `/${FRIEND_PREFIX}/trends`, name: "动态", component: Trends },
  ],
  [FM_PREFIX]: {
    path: `/${FM_PREFIX}`,
    name: "私人FM",
    component: FM,
  },
};
