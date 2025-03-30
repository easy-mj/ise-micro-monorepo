import { fetchResource } from '../utils'
import { sandBox } from '../sandbox'

// 加载 html 的方法
export const loadHtml = async (app) => {
  // 子应用需要展示的位置
  let container = app.container

  // 子应用的入口
  let entry = app.entry

  // 解析 html
  const [dom, scripts] = await parseHtml(entry)

  const ct = document.querySelector(container)

  if (!ct) {
    // throw new Error('容器不存在，请查看')
    return
  }
  ct.innerHTML = dom

  scripts.forEach((script) => {
    sandBox(app, script)
  })

  return app
}

// 解析 html
export const parseHtml = async (entry) => {
  const html = await fetchResource(entry)
  let allScripts = []

  const div = document.createElement('div')
  div.innerHTML = html

  // 标签、link、script(包含src和js代码两部分内容)
  const [dom, scriptUrl, script] = await getResources(div, entry)

  // 获取所有的 js 资源
  const fetchedScripts = await Promise.all(
    scriptUrl.map((url) => fetchResource(url))
  )

  allScripts = script.concat(fetchedScripts)

  return [dom, allScripts]
}

// 获取资源内容
export const getResources = async (root, entry) => {
  const scriptUrl = []
  const script = []
  const dom = root.outerHTML

  // 深度解析
  function deepParse(element, entry) {
    const children = element.children
    const parent = element.parent

    // 处理 script 中的内容
    if (element.nodeName.toLowerCase() === 'script') {
      const src = element.getAttribute('src')
      if (!src) {
        script.push(element.outerHTML)
      } else {
        if (src.startsWith('http')) {
          scriptUrl.push(src)
        } else {
          // 这里就是子应用为什么需要设置publicPath的原因
          scriptUrl.push(`http:${entry}/${src}`)
        }
      }

      if (parent) {
        parent.replaceChild(
          document.createComment('此 js 文件已经被微前端替换'),
          element
        )
      }
    }

    // link 也会有 js 的内容，如：<link rel="preload" href="http://localhost:8001/static/js/chunk-vendors.js" as="script">
    if (element.nodeName.toLowerCase() === 'link') {
      const href = element.getAttribute('href')

      if (href.endsWith('.js')) {
        if (href.startsWith('http')) {
          scriptUrl.push(href)
        } else {
          // 这里就是子应用为什么需要设置publicPath的原因
          scriptUrl.push(`http:${entry}/${href}`)
        }
      }
    }

    // 处理子元素
    for (let i = 0; i < children.length; i++) {
      deepParse(children[i])
    }
  }

  deepParse(root)

  return [dom, scriptUrl, script]
}
