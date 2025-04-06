import Index from '@/views/index'
import SelectCar from '@/views/select-car'

export default [
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
