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
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'piggy-bank']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    Fixed Deposit
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      Find Out your FD Maturity Details with ease.
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/nps-calculation')"
                >
                <span class="icon1"><font-awesome-icon :icon="['fas', 'money-bill-trend-up']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">National Pension Scheme</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                    Calculate your NPS amount and pension easily.
                   </ul>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/rd-calculation')">
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'coins']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    Recurring Deposit
                  </h5>
                 
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      The simplest RD Calculator out there.
                    </ul>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/cagr-calculation')">
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'chart-line']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    Compound annual growth rate
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      Figure out the compound annual growth rate in a flash.
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/nsc-calculation')"
                >
                <span class="icon1"><font-awesome-icon :icon="['fas', 'file-invoice-dollar']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">National Savings Certificate</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                    How much return does NSC give you? Find out!
                   </ul>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/hra-calculation')">
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'house-circle-check']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    House Rent Allowance
                  </h5>
                 
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      The Most Accurate HRA calculator out there.
                    </ul>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/mf-calculation')">
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'sack-dollar']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    Mutual Fund
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      Find out your mutual fund corpus on maturity!
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/ssy-calculation')"
                >
                <span class="icon1"><font-awesome-icon :icon="['fas', 'file-signature']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">Sukanya Samriddhi Yojana</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                    Should you invest in SSY? Check for yourself!
                   </ul>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-bg-fix mil-center mil-up" @click="$router.push('/sip-calculation')">
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'circle-dollar-to-slot']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    Systematic Investment Plan
                  </h5>
                 
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      How much can you save by starting an SIP? Find out!
                    </ul>
                </div>
              </div>
            </div>

            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/goal-sip-calculation')">
                  <span class="icon1"><font-awesome-icon :icon="['fas', 'bullseye']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">
                    Goal SIP
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                      Know the sip amount required to achieve your goals.
                    </ul>
                
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-bg-fix mil-center mil-up" @click="$router.push('/fire-calculation')"
                  
                >
                <span class="icon1"><font-awesome-icon :icon="['fas', 'money-bills']" /></span>
                  <h5 class="mil-mb-20 mil-light mil-up">FIRE</h5>
                 
                   <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up">
                    Know exactly how much you need to Retire.
                   </ul>
                </div>
              </div>
             
            </div>
          </div>
        </div>
</template>

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