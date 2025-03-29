// 存储主应用生命周期
let lifyCycle = {}

export const getMainLifeCycle = () => {
  return lifyCycle
}

export const setMainLifeCycle = (data) => {
  lifyCycle = data
}
