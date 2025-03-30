// 通过 eval 方式来执行 js 脚本
export const performScriptForEval = (script, appName, global) => {
  // 通过子应用打包时候的设置 library 获取到 window[appName] 获取到生命周期函数
  const globalWindow = (0, eval)(window)
  globalWindow.proxy = global
  const scriptText = `
    ((window) => {
      try{
        ${script}
      } catch (e) {
        console.error('run script error: ' + e)
      }
      return window['${appName}']
    }).bind(window.proxy)(window.proxy)
  `
  return eval(scriptText)
}
