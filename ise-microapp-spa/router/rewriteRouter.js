import { patchRouter } from '../utils'
import { turnApp } from './routerHandle'

// 重写 window 的路由跳转
export const rewriteRouter = () => {
  window.history.pushState = patchRouter(window.history.pushState, 'microPush')
  window.history.replaceState = patchRouter(
    window.history.replaceState,
    'microReplace'
  )

  // 路由切换需要触发 turnApp
  window.addEventListener('microPush', turnApp)
  window.addEventListener('microReplace', turnApp)

  // 点击浏览器前进、回退按钮也需要触发 turnApp
  window.onpopstate = function () {
    turnApp()
  }
}
