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

// 根据 route 查找子应用
export const findAppByRoute = (route) => {
  return filterApp('activeRule', route)
}

// 子应用是否做了切换
export const isTurnSubApp = () => {
  window.__ISE_ORIGIN_SUB_APP__ = window.__ISE_CURRENT_SUB_APP__
  if (window.__ISE_CURRENT_SUB_APP__ === window.location.pathname) {
    return false
  }
  // 获取到当前路由的子应用信息，格式：/ise-microapp-vue2
  const currentApp = window.location.pathname.match(/(\/[a-zA-Z0-9-]+)/g)
  if (!currentApp) return
  window.__ISE_CURRENT_SUB_APP__ = currentApp[0]
  return true
}
