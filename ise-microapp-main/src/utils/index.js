import { registerMicroApp, start } from 'ise-microapp-spa'
import { changeLoading } from '@/store'

export const registerApp = (list) => {
  // 注册到微前端框架
  registerMicroApp(list, {
    beforeLoad: [
      () => {
        changeLoading(true)
        console.log('开始加载')
      }
    ],
    mounted: [
      () => {
        changeLoading(false)
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
