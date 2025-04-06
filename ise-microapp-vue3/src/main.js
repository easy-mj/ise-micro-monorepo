import './public-path'
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

let router = null
let instance = null
let history = null

function render(props = {}) {
  const { container } = props
  history = createWebHashHistory(
    window.__POWERED_BY_QIANKUN__ ? '/ise-microapp-vue3' : '/'
  )
  router = createRouter({
    history,
    routes
  })

  instance = createApp(App)
  instance.use(router)
  instance.use(store)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

// 判断当前是否是微前端环境中运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * 暴露三个生命周期方法，供微前端框架使用
 * 此时，如果在控制台打印输出 window['ise-microapp-vue3'] 是可以查看到这三个生命周期方法
 */

// 开始加载
export async function bootstrap() {
  console.log('ise-microapp-vue3 执行 bootstrap 开始加载')
}

// 渲染成功
export async function mount(props) {
  props.onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev)
  })
  setTimeout(() => {
    props.setGlobalState({ x: 2, y: 2 })
  }, 3000)

  render(props)
  console.log('ise-microapp-vue3 执行 mount 渲染成功')
}

// 卸载
export async function unmount(ctx) {
  console.log('ise-microapp-vue3 执行 unmount 卸载')
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}
