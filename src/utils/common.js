export function genImgUrl(url, w, h) {
  if (!h) {
    h = w;
  }
  url += `?param=${w}y${h}`;
  return url;
}

// 数字补0
export function pad(num, n = 2) {
  let len = num.toString().length;
  while (len < n) {
    num = "0" + num;
    len++;
  }
  return num;
}

// 格式化数字
export function formatNumber(number) {
  number = Number(number) || 0;
  return number > 100000 ? `${Math.round(number / 10000)}万` : number;
}
