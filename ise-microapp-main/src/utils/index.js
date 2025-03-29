import { registerMicroApp, start } from 'ise-microapp-spa'

export const registerApp = (list) => {
  // 注册到微前端框架
  registerMicroApp(list, {
    beforeLoad: [
      () => {
        console.log('开始加载')
      }
    ],
    mounted: [
      () => {
        console.log('渲染完成')
      }
    ],
    destroyed: [
      () => {
        console.log('卸载完成')
      }
    ]
  })
  // 启动微前端框架
  start()
}
