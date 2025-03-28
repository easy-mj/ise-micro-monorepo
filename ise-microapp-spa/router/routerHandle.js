import { isTurnSubApp } from '../utils'

export const turnApp = () => {
  if (!isTurnSubApp()) {
    return
  }
  console.log('路由切换了')
}
