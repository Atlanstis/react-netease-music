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
