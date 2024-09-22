import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'
import Calculator from '../components/Calculator.vue'
import TheHome from '../components/TheHome.vue'
import FdCalculator from '../components/Calculations/FdCalculator.vue'
import CagrCalculation from '../components/Calculations/CagrCalculation.vue'
import FireCalculation from '../components/Calculations/FireCalculation.vue'
import GoalSipCalculation from '../components/Calculations/GoalSipCalculation.vue'
import HraCalculation from  '../components/Calculations/HraCalculation.vue'
import MfCalculation from '../components/Calculations/MfCalculation.vue'
import NpsCalculation from '../components/Calculations/NpsCalculation.vue'
import NscCalculation from '../components/Calculations/NscCalculation.vue'
import RdCalculation from '../components/Calculations/RdCalculation.vue'
import SipCalculation from '../components/Calculations/SipCalculation.vue'
import SsyCalculation from '../components/Calculations/SsyCalculation.vue'
import TaxCalculation from '../components/Calculations/TaxCalculation.vue'


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
    {
      path: '/cagr-calculation',
      name: 'CagrCalculation',
      component: CagrCalculation,
    },
    {
      path: '/fire-calculation',
      name: 'FireCalculation',
      component: FireCalculation,
    },
    {
      path: '/goal-sip-calculation',
      name: 'GoalSipCalculation',
      component: GoalSipCalculation,
    },
    {
      path: '/hra-calculation',
      name: 'HraCalculation',
      component: HraCalculation,
    },
    {
      path: '/mf-calculation',
      name: 'MfCalculation',
      component: MfCalculation,
    },
    {
      path: '/nps-calculation',
      name: 'NpsCalculation',
      component: NpsCalculation,
    },
    {
      path: '/nsc-calculation',
      name: 'NscCalculation',
      component: NscCalculation,
    },
    {
      path: '/rd-calculation',
      name: 'RdCalculation',
      component: RdCalculation,
    },
    {
      path: '/sip-calculation',
      name: 'SipCalculation',
      component: SipCalculation,
    },
    {
      path: '/ssy-calculation',
      name: 'SsyCalculation',
      component: SsyCalculation,
    },
    {
      path: '/tax-calculation',
      name: 'TaxCalculation',
      component: TaxCalculation,
    },
  ]
})

export default router
