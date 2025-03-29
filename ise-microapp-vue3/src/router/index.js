import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/index'
import SelectCar from '@/views/select-car'

const routes = [
  // 首页
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  // 选车
  {
    path: '/select',
    name: 'SelectCar',
    component: SelectCar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
