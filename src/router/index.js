import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../components/Home.vue'
import Calculator from '../components/Calculator.vue'
import TheHome from '../components/TheHome.vue'
import MasterClass from '../components/MasterClass.vue'
import MyMentor from '../components/MyMentor.vue'
import Brand from '../components/Brand.vue'
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
import BookCall from '../components/SubPages/BookCall.vue'
import DebtManagement from '../components/DebtManagement.vue'
import InquiryForm from '../components/SubPages/InquiryForm.vue'

import PaymentPage from '../components/SubPages/PaymentPage.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome,
    },
    {
      path: '/masterClass',
      name: 'MasterClass',
      component: MasterClass,
    },
    {
      path: '/myMentor',
      name: 'MyMentor',
      component: MyMentor,
    },
    {
      path: '/brand',
      name: 'Brand',
      component: Brand,
    },
    {
      path: '/debtManagement',
      name: 'DebtManagement',
      component: DebtManagement,
    },
    {
      path: '/inquiryForm',
      name: 'InquiryForm',
      component: InquiryForm,
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
    {
      path: '/paymentPage',
      name: 'PaymentPage',
      component: PaymentPage,
    },
    {
      path: '/bookCall',
      name: 'BookCall',
      component: BookCall,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Scroll to the saved position
    } else {
      return { top: 0 }; // Scroll to top for new navigation
    }
  }
})

export default router
