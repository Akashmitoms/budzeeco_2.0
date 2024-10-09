<template>
    <div class="icon-boxes mil-p-160-130">
          <div class="container">
            <div class="mil-text-center">
              <h2 class="mil-light mil-mb-30 mil-up">Financial Planning Tools</h2>
              <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up">
                Financial tools to help you manage finances <br>
                ranging from FD calculator to SSY.
              </p>
            </div>
            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/fdCalculator')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'piggy-bank']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Fixed Deposit
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      Find Out your FD Maturity Details with ease.
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/nps-calculation')"
                >
                <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'money-bill-trend-up']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">National Pension Scheme</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    Calculate your NPS amount and pension easily.
                   </ul>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/rd-calculation')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'coins']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Recurring Deposit
                  </h5>
                 
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      The simplest RD Calculator out there.
                    </ul>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/cagr-calculation')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'chart-line']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Compound annual growth rate
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      Figure out the compound annual growth rate in a flash.
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/nsc-calculation')"
                >
                <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'file-invoice-dollar']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">National Savings Certificate</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    How much return does NSC give you? Find out!
                   </ul>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/hra-calculation')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'house-circle-check']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    House Rent Allowance
                  </h5>
                 
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      The Most Accurate HRA calculator out there.
                    </ul>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/mf-calculation')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'sack-dollar']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Mutual Fund
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      Find out your mutual fund corpus on maturity!
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/ssy-calculation')"
                >
                <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'file-signature']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">Sukanya Samriddhi Yojana</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    Should you invest in SSY? Check for yourself!
                   </ul>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/sip-calculation')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'circle-dollar-to-slot']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Systematic Investment Plan
                  </h5>
                 
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      How much can you save by starting an SIP? Find out!
                    </ul>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/goal-sip-calculation')">
                  <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'bullseye']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Goal SIP
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      Know the sip amount required to achieve your goals.
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/fire-calculation')"
                  
                >
                <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'money-bills']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">FIRE</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    Know exactly how much you need to Retire.
                   </ul>
                </div>
              </div>
             
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/tax-calculation')"
                  
                >
                <span class="icon1 zoomOut"><font-awesome-icon :icon="['fas', 'file-shield']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">TAX</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    Smart planning to reduce your taxable income.
                   </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
import { gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

  export default {
    name: 'Calculator',
    methods: {
  animaFunction(){
    const zoomOutElements = this.$el.querySelectorAll('.zoomOut');
  zoomOutElements.forEach(zoomOut => {
      gsap.from(zoomOut, {
        scale: 0,
        duration: 1,
        y: 50,
        scrollTrigger: {
          trigger: zoomOut,
          start: 'top 95%',
          end: 'top 81%',
          scrub: 1,
          markers: false
        }
      });
    });
  }
},

 mounted(){
  gsap.registerPlugin(ScrollTrigger);
  this.animaFunction();
 }
  };
</script>

<style scoped>
@import '../assets/style1.css';
@import '../assets/style2.css';
@import '../assets/style3.css';


.mil-p-160-130 {
  background: linear-gradient(90deg, #192626, #1b1d1d);
}
.icon1 {
  font-size: 4rem;
  color: white !important;
  margin-bottom: 1rem;
}
</style>