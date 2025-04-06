import { getSubAppList } from '../constants'
import { parseHtml } from './index'

export const prefetch = async () => {
  // 获取到所有的子应用列表（除去当前正在显示的）
  const subAppList = getSubAppList().filter((item) => {
    return !window.location.pathname.startsWith(item.activeRule)
  })

  // 预加载剩下的所有子应用
  await Promise.all(
    subAppList.map(async (item) => {
      return await parseHtml(item.entry, item.name)
    })
  )
}
