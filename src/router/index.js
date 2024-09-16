import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import MyMentor from '../components/MyMentor.vue'
import Contact from '../components/Contact.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/myMentor',
      name: 'MyMentor',
      component: MyMentor,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
  ]
})

export default router
