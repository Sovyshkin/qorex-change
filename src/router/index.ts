import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/exchange-rules',
    name: 'ExchangeRules',
    component: () => import('../views/ExchangeRulesView.vue')
  },
  {
    path: '/user-agreement',
    name: 'UserAgreement',
    component: () => import('../views/UserAgreementView.vue')
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue')
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