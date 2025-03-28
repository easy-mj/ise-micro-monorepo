import { getSubAppList } from '../constants'

// 根据 key 从子应用列表中查找子应用
const filterApp = (key, value) => {
  const subAppList = getSubAppList()
  const currentApp = subAppList.filter((item) => item[key] === value)
  return currentApp && currentApp.length ? currentApp[0] : {}
}

// 查找到符合当前路由的子应用
export const currentApp = () => {
  const currentUrl = window.location.pathname
  return filterApp('activeRule', currentUrl)
}

// 子应用是否做了切换
export const isTurnSubApp = () => {
  if (window.__ISE_CURRENT_SUB_APP__ === window.location.pathname) {
    return false
  }
  return true
}
