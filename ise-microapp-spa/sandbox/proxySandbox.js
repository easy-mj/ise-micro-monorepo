/**
 * 代理沙箱
 * 说明：通过代理技术 proxy 实现，性能好，兼容性差，只适合比较新的浏览器
 */

let defaultValue = {} // 子应用的沙箱容器

export class ProxySandbox {
  constructor() {
    // 代理对象
    this.proxy = null
    this.active()
  }
  // 沙箱激活
  active() {
    // 创建一个代理沙箱
    this.proxy = new Proxy(window, {
      get(target, key) {
        if (typeof target[key] === 'function' && /^[a-z]/.test(key)) {
          return target[key].bind && target[key].bind(target)
        } else {
          return defaultValue[key] || target[key]
        }
      },
      set(target, key, value) {
        defaultValue[key] = value
        return true
      }
    })
  }
  // 沙箱销毁
  inactive() {
    defaultValue = {}
  }
}
