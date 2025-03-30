/**
 * 快照沙箱
 * 说明：因为 window 对象非常大，遍历 window 消耗非常大，所以性能比较差，只适合比较老的浏览器
 */
export class SnapshotSandbox {
  constructor() {
    // 代理对象
    this.proxy = window
    this.active()
  }
  // 沙箱激活
  active() {
    // 创建一个沙箱快照
    this.snapshot = new Map()

    // 遍历全局环境
    for (const key in window) {
      if (window.hasOwnProperty(key)) {
        // 将window上的属性进行拍照
        this.snapshot[key] = window[key]
      }
    }
  }
  // 沙箱销毁
  inactive() {
    for (const key in window) {
      if (window.hasOwnProperty(key)) {
        // 将上次快照的结果和本次window属性做对比
        if (window[key] !== this.snapshot[key]) {
          // 还原window
          window[key] = this.snapshot[key]
        }
      }
    }
  }
}
