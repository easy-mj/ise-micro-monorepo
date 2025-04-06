import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'

Vue.config.productionTip = false

let router = null
let instance = null

function render(props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/ise-microapp-vue2' : '/',
    routes
  })

  instance = new Vue({
    router,
    store,
    render: (h) => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 判断当前是否是微前端环境中运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * 暴露三个生命周期方法，供微前端框架使用
 * 此时，如果在控制台打印输出 window['ise-microapp-vue2'] 是可以查看到这三个生命周期方法
 */

// 开始加载
export async function bootstrap() {
  console.log('ise-microapp-vue2 执行 bootstrap 开始加载')
}

// 渲染成功
export async function mount(props) {
  render(props)
  console.log('ise-microapp-vue2 执行 mount 渲染成功')
}

// 卸载
export async function unmount(ctx) {
  console.log('ise-microapp-vue2 执行 unmount 卸载')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
}
