import { registerMicroApp, start, createStore } from 'ise-microapp-spa'
import { changeLoading } from '@/store'
import { subNavList } from '@/store/sub'

const store = createStore()
// const storeData = store.getStore()

window.ISE_STORE = store

store.subscribe((newValue, oldValue) => {
  console.log(newValue, oldValue)
})

// store.update({
//   ...storeData,
//   x: 1
// })

export const startMicroApp = () => {
  // 注册到微前端框架
  registerMicroApp(subNavList, {
    beforeLoad: [
      () => {
        changeLoading(true)
        console.log('ise-microapp-main 开始加载')
      }
    ],
    mounted: [
      () => {
        setTimeout(() => {
          changeLoading(false)
        }, 200)
        console.log('ise-microapp-main 渲染完成')
      }
    ],
    destroyed: [
      () => {
        console.log('ise-microapp-main 卸载完成')
      }
    ]
  })

  // 如果当前是跟路由，且没有子应用，默认进入到 ise-microapp-vue3/#/index
  if (window.location.pathname === '/') {
    window.history.pushState(null, null, '/ise-microapp-vue3/#/index')
  }

  // 启动微前端框架
  start()
}
