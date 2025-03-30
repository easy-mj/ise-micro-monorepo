import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

let instance = null
const render = () => {
  instance = createApp(App)
  instance.use(store).use(router).mount('#app')
}

// 判断当前是否是微前端环境中运行
if (!window.__ISE_MICRO_WEB__) {
  render()
}

/**
 * 暴露三个生命周期方法，供微前端框架使用
 * 此时，如果在控制台打印输出 window['ise-microapp-vue3'] 是可以查看到这三个生命周期方法
 */

// 开始加载
export const bootstrap = () => {
  console.log('ise-microapp-vue3 执行 bootstrap 开始加载')
}

// 渲染成功
export const mount = () => {
  window.a = 1

  // 先有监听，再有触发
  window.ice.on('test1', (data) => {
    console.log(data)

    window.ice.emit('test2', { b: 2 })
  })

  render()
  console.log('ise-microapp-vue3 执行 mount 渲染成功')
}

// 卸载
export async function unmount(ctx) {
  console.log('ise-microapp-vue3 执行 unmount 卸载')
  instance = null
  const { container } = ctx
  if (container) {
    document.querySelector(container).innerHTML = ''
  }
}
