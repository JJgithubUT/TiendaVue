import { createRouter, createWebHistory } from 'vue-router'
import ShopVue from '../views/ShopVue.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ShopVue,
    },
  ],
})

export default router
