import { findAppByRoute } from '../utils'
import { getMainLifeCycle } from '../constants'

export const lifeCycle = async () => {
  // 获取到上一个子应用
  const prevApp = findAppByRoute(window.__ISE_ORIGIN_SUB_APP__)
  // 获取到要跳转的子应用
  const nextApp = findAppByRoute(window.__ISE_CURRENT_SUB_APP__)

  if (!nextApp) return

  // 卸载上一个子应用
  if (prevApp && prevApp.destoryed) {
    await destoryed(prevApp)
  }

  const app = await beforeLoad(nextApp)

  await mounted(app)
}

/**
 * 微前端框架的生命周期函数 beforeLoad
 */
export const beforeLoad = async (app) => {
  // 对应的执行主应用的生命周期
  await runMainLifeCycle('beforeLoad')

  app && app.beforeLoad && app.beforeLoad()

  // 新的app内容
  const appContext = null
  return appContext
}

/**
 * 微前端框架的生命周期函数 mounted
 */
export const mounted = async (app) => {
  app && app.mounted && app.mounted()

  // 对应的执行主应用的生命周期
  await runMainLifeCycle('mounted')
}

/**
 * 微前端框架的生命周期函数 destoryed
 */
export const destoryed = async (app) => {
  app && app.destoryed && app.destoryed()
  // 对应的执行主应用的生命周期
  await runMainLifeCycle('destoryed')
}

/**
 * 执行主应用的生命周期
 */
export const runMainLifeCycle = async (type) => {
  const mainLifeCycle = getMainLifeCycle()

  await Promise.all(
    mainLifeCycle[type].map(async (lifeCycleFn) => await lifeCycleFn())
  )
}
