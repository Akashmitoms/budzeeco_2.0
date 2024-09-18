import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'
import MyMentor from '../components/MyMentor.vue'
import TheHome from '../components/TheHome.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
    },
    {
      path: '/myMentor',
      name: 'MyMentor',
      component: MyMentor,
    },
  ]
})

export default router
