import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/LandingView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'void',
      meta: { title: 'The void' },
      component: LandingView,
    },
    {
      path: '/home',
      name: 'home',
      meta: { title: 'home' },
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'about me' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/commisions',
      name: 'commisions',
      meta: { title: 'Commisions' },
      component: () => import('../views/CommisionsView.vue'),
    },
    {
      path: '/commisions/chart',
      name: 'chart',
      meta: { title: 'Commision chart' },
      component: () => import('../views/ChartView.vue'),
    },
    {
      path: '/commisions/termsOfService',
      name: 'TOS',
      meta: { title: 'Terms of Service' },
      component: () => import('../views/TosView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '404' },
    },
  ],
})

export default router
