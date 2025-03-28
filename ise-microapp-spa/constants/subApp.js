import { setDataTracking } from './dataTracking'

// 存储子应用列表
let subAppList = []

// 获取子应用列表
export const getSubAppList = () => subAppList

// 设置子应用列表
export const setSubAppList = (appList) => {
  subAppList = appList
  // 数据埋点
  setDataTracking('subAppList', subAppList)
}
