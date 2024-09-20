import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'
import Calculator from '../components/Calculator.vue'
import TheHome from '../components/TheHome.vue'
import FdCalculator from '../components/Calculations/FdCalculator.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
    },
    {
      path: '/calculator',
      name: 'Calculator',
      component: Calculator,
    },
    {
      path: '/fdCalculator',
      name: 'FdCalculator',
      component: FdCalculator,
    },
  ]
})

export default router
