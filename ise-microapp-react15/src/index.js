import './public-path'
import React from 'react'
import ReactDOM from 'react-dom'
import BasicMap from './router/index.jsx'
import './index.scss'
import { setMain } from './utils/global.js'

const render = () => {
  ReactDOM.render(<BasicMap />, document.getElementById('app-react'))
}

// 判断当前是否是微前端环境中运行
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

/**
 * 暴露三个生命周期方法，供微前端框架使用
 * 此时，如果在控制台打印输出 window['ise-microapp-react15'] 是可以查看到这三个生命周期方法
 */

// 开始加载
export const bootstrap = async () => {
  console.log('ise-microapp-react15 执行 bootstrap 开始加载')
}

// 渲染成功
export const mount = async (props) => {
  // 缓存主应用传递的数据
  setMain(props.appInfo)
  render()
  console.log('ise-microapp-react15 执行 mount 渲染成功')
}

// 卸载
export const unmount = async (props) => {
  console.log('ise-microapp-react15 执行 unmount 卸载')
}
