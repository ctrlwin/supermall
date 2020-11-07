//防抖动函数
export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// 时间格式化
export function formatDate(date, fmt) {
  // 1.获取年份
  // y+ -> 匹配1个或多个y
  // y* -> 匹配0个或多个y
  // y? -> 匹配0个或1个y
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  // 2.获取月 日 时 分 秒
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}

//如果时间不足两位则用0补齐
// 例如： 9-8-1 -> 09-08-01
function padLeftZero(str) {
  //str为某一段时间 如22
  return ('00' + str).substr(str.length)
}
