// 通过 new Function 方式来执行 js 脚本
export const performScriptForFunction = (script) => {
  new Function(script).call(window, window)
}
