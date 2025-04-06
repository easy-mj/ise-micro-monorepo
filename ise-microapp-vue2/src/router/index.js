import Vue from 'vue'
import VueRouter from 'vue-router'
import EnergyView from '../views/energy'

Vue.use(VueRouter)

const routes = [
  {
    path: '/energy',
    name: 'Energy',
    component: EnergyView
  }
]

export default routes
