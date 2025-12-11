import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/Home.vue')
    },
    {
      path: "/meal/:idMeal", 
      name: "MealDetail", 
      component: () => import('@/views/MealDetail.vue')
    },

  ],
})

export default router
