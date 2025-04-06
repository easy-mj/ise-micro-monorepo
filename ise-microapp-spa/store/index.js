export const createStore = (initData = {}) =>
  (() => {
    let store = initData
    const observers = [] // 管理所有的订阅者，依赖

    /**
     * 获取 store
     */
    const getStore = () => store

    /**
     * 更新 store
     */
    const update = (value) => {
      if (value !== store) {
        // 执行 store 的操作
        const oldValue = store
        // 更新 store
        store = value
        // 通知所有的订阅者，监听 store 的变化
        observers.forEach(async (cb) => await cb(store, oldValue))
      }
    }

    /**
     * 添加订阅者
     */
    const subscribe = (fn) => {
      observers.push(fn)
    }

    return {
      getStore,
      update,
      subscribe
    }
  })()
