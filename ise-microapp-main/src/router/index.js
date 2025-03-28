import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/App.vue')
  },
  {
    path: '/ise-microapp-vue2',
    component: () => import('@/App.vue')
  },
  {
    path: '/ise-microapp-vue3',
    component: () => import('@/App.vue')
  },
  {
    path: '/ise-microapp-react15',
    component: () => import('@/App.vue')
  },
  {
    path: '/ise-microapp-react16',
    component: () => import('@/App.vue')
  }
]

const router = (base = '') => {
  return createRouter({
    history: createWebHistory(base),
    routes
  })
}

export default router
