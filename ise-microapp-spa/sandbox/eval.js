// 通过 eval 方式来执行 js 脚本
export const performScriptForEval = (script, appName) => {
  // 通过子应用打包时候的设置 library 获取到 window[appName] 获取到生命周期函数
  const scriptText = `
    () => {
      ${script}
      return window['${appName}']
    }
  `
  return eval(scriptText).call(window, window)
}
