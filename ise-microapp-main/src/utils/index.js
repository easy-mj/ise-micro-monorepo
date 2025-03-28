import { registerMicroApp, start } from 'ise-microapp-spa'

export const registerApp = (list) => {
  // 注册到微前端框架
  registerMicroApp(list)
  // 启动微前端框架
  start()
}
