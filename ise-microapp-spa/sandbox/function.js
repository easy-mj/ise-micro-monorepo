// 通过 new Function 方式来执行 js 脚本
export const performScriptForFunction = (script, appName) => {
  // 通过子应用打包时候的设置 library 获取到 window[appName] 获取到生命周期函数
  const scriptText = `
    ${script}
    return window['${appName}']
  `
  return new Function(scriptText).call(window, window)
}
