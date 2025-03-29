import { isTurnSubApp } from '../utils'
import { lifeCycle } from '../lifeCycle'

export const turnApp = async () => {
  if (!isTurnSubApp()) {
    return
  }
  // 微前端的生命周期执行
  await lifeCycle()
}
