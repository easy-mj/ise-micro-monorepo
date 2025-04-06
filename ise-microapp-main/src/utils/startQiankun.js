import { registerMicroApps, start, initGlobalState } from 'qiankun'
import { changeLoading } from '@/store'
import { subNavList } from '@/store/sub-qiankun'

const state = {
  x: 1,
  y: 1
}
const actions = initGlobalState(state)
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev)
})
actions.setGlobalState(state)

export const startMicroApp = () => {
  // 注册到微前端框架
  registerMicroApps(subNavList, {
    beforeLoad: [
      () => {
        changeLoading(true)
        console.log('ise-microapp-main 开始加载')
      }
    ],
    afterMount: [
      () => {
        setTimeout(() => {
          changeLoading(false)
        }, 200)
        console.log('ise-microapp-main 渲染完成')
      }
    ],
    afterUnmount: [
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
