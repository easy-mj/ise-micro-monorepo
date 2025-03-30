// 通过 new Function 方式来执行 js 脚本
export const performScriptForFunction = (script, appName, global) => {
  // 通过子应用打包时候的设置 library 获取到 window[appName] 获取到生命周期函数
  window.proxy = global
  const scriptText = `
    return ((window) => {
      try{
        ${script}
      } catch (e) {
        console.error('run script error: ' + e)
      }
      return window['${appName}']
    })(window.proxy)
  `

  return new Function(scriptText)()
}
