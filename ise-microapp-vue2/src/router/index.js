import Vue from 'vue'
import VueRouter from 'vue-router'
import EnergyView from '../views/energy/EnergyView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/energy',
    name: 'Energy',
    component: EnergyView
  }
]

const router = new VueRouter({
  routes
})

export default router
