// 系统数据埋点
window.ise = {}

export const setDataTracking = (key, val) => {
  if (key && val) {
    window.ise[key] = val
  }
}
