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

// 格式化时间，返回 00:00 格式，输入秒
export function formatTime(interval) {
  interval = interval | 0;
  const minute = pad((interval / 60) | 0);
  const second = pad(interval % 60);
  return `${minute}:${second}`;
}
