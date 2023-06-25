import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevelopView from '../views/DevelopView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/início',
      name: 'home',
      component: HomeView
    },
    {
      path: '/desenvolvimento',
      name: 't',
      component: DevelopView
    }
  ]
})

export default router
