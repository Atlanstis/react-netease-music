import { PLAY_MODE_MAP, PLAY_MODE_CARDIAC } from "@/constants/song";

// 音乐播放地址
export function genSongPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

// 图片地址，支持自定义大小
export function genImgUrl(url, w, h) {
  if (!h) {
    h = w;
  }
  url += `?param=${w}y${h}`;
  return url;
}

export function normalizedSong(song) {
  let normalize = (song) => {
    return {
      id: song.id,
      picUrl: song.picUrl,
      name: song.name,
      url: genSongPlayUrl(song.id),
      durationSec: song.song.duration / 1000,
      alias: song.song.alias,
      artists: song.song.artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
        };
      }),
    };
  };
  if (Array.isArray(song)) {
    return song.map((item) => {
      return normalize(item);
    });
  } else {
    return normalize(song);
  }
}

export function getPlayMode(hasCardiac) {
  let playMode = PLAY_MODE_MAP;
  if (hasCardiac) {
    playMode = Object.assign({}, PLAY_MODE_MAP, PLAY_MODE_CARDIAC);
  }
  return playMode;
}
