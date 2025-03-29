import { performScriptForFunction } from './function'

// 检测生命周期函数
const isCheckLifeCycle = (lifeCycle) => {
  return (
    lifeCycle && lifeCycle.bootstrap && lifeCycle.mount && lifeCycle.unmount
  )
}

// 子应用生命周期处理，环境变量设置
export const sandBox = (app, script) => {
  // 设置环境变量
  window.__ISE_MICRO_WEB__ = true

  // 运行 js 代码
  const lifeCycle = performScriptForFunction(script, app.name)

  // 生命周期，挂载到 app 上
  if (isCheckLifeCycle(lifeCycle)) {
    app.bootstrap = lifeCycle.bootstrap
    app.mount = lifeCycle.mount
    app.unmount = lifeCycle.unmount
  }
}
