import { getSubAppList } from '../constants'
import { isEmptyObject } from './isEmptyObject'

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
  const { pathname, hash } = window.location
  const url = pathname + hash

  // 当前路由无改变。
  const currentPrefix = url.match(/(\/[a-zA-Z0-9-]+)/g)

  if (
    currentPrefix &&
    currentPrefix[0] === window.__ISE_CURRENT_SUB_APP__ &&
    hash === window.__CURRENT_HASH__
  ) {
    return false
  }
  if (window.__ISE_ORIGIN_SUB_APP__ === window.location.pathname) {
    return false
  }

  window.__ISE_ORIGIN_SUB_APP__ = window.__ISE_CURRENT_SUB_APP__

  const currentSubApp = window.location.pathname.match(/(\/[a-zA-Z0-9-]+)/)

  if (!currentSubApp) {
    return false
  }
  const findApp = findAppByRoute(currentSubApp[0])
  if (isEmptyObject(findApp)) return
  // 当前路由以改变，修改当前路由
  window.__ISE_CURRENT_SUB_APP__ = currentSubApp[0]
  console.log(window.__ISE_ORIGIN_SUB_APP__, window.__ISE_CURRENT_SUB_APP__)
  // 判断当前hash值是否改变
  window.__CURRENT_HASH__ = hash

  return true
}
