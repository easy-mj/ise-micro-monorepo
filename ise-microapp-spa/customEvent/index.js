export class IseCustomEvent {
  // 事件监听
  on(name, cb) {
    window.addEventListener(`ise_${name}`, (e) => {
      cb(e.detail)
    })
  }
  // 事件触发
  emit(name, data) {
    const event = new CustomEvent(`ise_${name}`, {
      detail: data
    })
    window.dispatchEvent(event)
  }
}
