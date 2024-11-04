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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'about me' },
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: '404' },
    },
  ],
})

export default router
