import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  // Здесь можно добавить другие маршруты
  // {
  //   path: '/trading',
  //   name: 'Trading',
  //   component: () => import('../pages/Trading.vue')
  // },
  // {
  //   path: '/wallet',
  //   name: 'Wallet', 
  //   component: () => import('../pages/Wallet.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router