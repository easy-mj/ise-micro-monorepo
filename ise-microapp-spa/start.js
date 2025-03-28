import { setSubAppList } from './constants'
import { rewriteRouter } from './router'

// 实现路由拦截
rewriteRouter()

export const registerMicroApp = (appList) => {
  setSubAppList(appList)
}
