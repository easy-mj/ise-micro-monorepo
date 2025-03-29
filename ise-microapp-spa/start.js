import { setSubAppList, getSubAppList } from './constants'
import { rewriteRouter } from './router'
import { currentApp } from './utils'
import { setMainLifeCycle } from './constants'

// 实现路由拦截
rewriteRouter()

export const registerMicroApp = (appList, lifeCycle) => {
  setSubAppList(appList)
  setMainLifeCycle(lifeCycle)
}

// 启动微前端框架
export const start = () => {
  // 验证当前子应用列表是否为空
  const appList = getSubAppList()
  if (!appList.length) {
    // 子应用列表为空
    throw new Error('子应用列表为空，请正确注册')
  }
  // 查找到符合当前路由的子应用
  const app = currentApp()
  if (app) {
    // 存储当前的子应用 activeRule
    window.__ISE_CURRENT_SUB_APP__ = app.activeRule
    const { pathname, hash } = window.location
    const url = pathname + hash
    window.history.pushState('', '', url)
  }
}
