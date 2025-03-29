import { fetchResource } from '../utils'

// 加载 html 的方法
export const loadHtml = async (app) => {
  // 子应用需要展示的位置
  let container = app.container

  // 子应用的入口
  let entry = app.entry

  // 解析 html
  const html = await parseHtml(entry)

  const ct = document.querySelector(container)
  if (!ct) {
    throw new Error('容器不存在，请查看')
  }
  ct.innerHTML = html

  return app
}

// 解析 html
export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)

  const div = document.createElement('div')
  div.innerHTML = html

  // 标签、link、script(包含src和js代码两部分内容)
  const [dom, scriptUrl, script] = await parseJS()

  return html
}

// 解析 JS
export const parseJS = async () => {
  return ['', '', '']
}
