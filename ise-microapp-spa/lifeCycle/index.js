import { findAppByRoute, isEmptyObject } from '../utils'
import { getMainLifeCycle } from '../constants'
import { loadHtml } from '../loader'

export const lifeCycle = async () => {
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ISE_ORIGIN_SUB_APP__)
  // 获取到要跳转的子应用
  const nextApp = findAppByRoute(window.__ISE_CURRENT_SUB_APP__)

  if (isEmptyObject(nextApp)) return

  // 卸载上一个子应用
  if (prevApp && prevApp.unmount) {
    await unmount(prevApp)

    // 销毁沙箱快照(高版本浏览器测试存在问题：react15子应用切换到vue3子应用，应用加载异常)
    prevApp.sandBox.inactive()
  }

  const app = await boostrap(nextApp)

  await mounted(app)
}

/**
 * 微前端框架的生命周期函数 boostrap
 */
export const boostrap = async (app) => {
  // 对应的执行主应用的生命周期
  await runMainLifeCycle('beforeLoad', app)

  // 新的app内容
  const subApp = await loadHtml(app) // 获取的是子应用的内容
  subApp && subApp.bootstrap && subApp.bootstrap() // 执行子应用的beforeLoad生命周期方法
  return subApp
}

/**
 * 微前端框架的生命周期函数 mounted
 */
export const mounted = async (app) => {
  app && app.mount && app.mount()

  // 对应的执行主应用的生命周期
  await runMainLifeCycle('mounted', app)
}

/**
 * 微前端框架的生命周期函数 unmount
 */
export const unmount = async (app) => {
  app && app.unmount && app.unmount(app)

  // 对应的执行主应用的生命周期
  await runMainLifeCycle('destroyed')
}

/**
 * 执行主应用的生命周期
 */
export const runMainLifeCycle = async (type, app) => {
  const mainLifeCycle = getMainLifeCycle()

  await Promise.all(
    mainLifeCycle[type].map(async (lifeCycleFn) => await lifeCycleFn(app))
  )
}
