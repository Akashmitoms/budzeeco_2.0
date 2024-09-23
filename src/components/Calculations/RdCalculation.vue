<template>
  <section class="section7">
    <h1 class="head_line_b">RD Calculator</h1>
    <p class="head_line_pb">Recurring Deposit Calculator</p>
    <hr class="hr" />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>Invested Amount:</p><h6 class="value">{{ totalInvestment }}</h6></div>
          <div class="v_line"></div>
          <div><p>Estimated Returns</p><h6 class="value">{{ totalInterest }}</h6></div>
          <div class="v_line"></div>
          <div><p>Maturity Value:</p><h6 class="value">{{ maturityValue }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Monthly Investment</label>
          <input type="text" v-model.number="monthlyInvestment" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Annual Interest Rate (%)</label>
          <input type="tel" v-model.number="annualInterestRate" placeholder="Enter percentage" />
        </div>
        <div class="input_field1">
          <div class="input_field_sub">
          <label for="">Time Period (Years)</label>
          <span id="common_input">{{ timePeriod }} years</span></div>
          <input type="range" v-model.number="timePeriod" min="1" max="10" />
          
        </div>
        <br />
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay :chartType="chartType" :data="chartData" :options="chartOptions" />
        </div>
        <br />
        <section class="section8">
          <h2>RD amount calculation formula</h2>
          <p>
            Most banks calculate interest on a quarterly basis in a recurring deposit
            account. Thus, the formula that we use here compounds your monthly RD amount
            quarterly. It is evaluated using a simple future value formula for recurring
            cashflows paid at the start of each period (here, at the start of every month)
          </p><br>
        </section>
      </div>
    </div>
    <div class="cla1">
      <div class="cla1_a">
        <section class="section8">
          <h2>How Our Calculator Can Help You?</h2>
          <p>
            a. Calculate the RD maturity amount <br />
            b. Determine the monthly contribution amount to get the desired corpus<br />
            c. Compare RD returns to other investment schemes.<br />
            d. Understand the RD scheme eligibility, contribution limits, tax benefits,
            and withdrawal rules.
          </p></section>
        <div class="contant">
          <h2>Explanation</h2>
          <p>
            For example: You choose a set amount every month, like a month-on-month money
            ritual and joyfully toss it into your RD account on a delegated day. 📅 Then,
            your money starts compounding at a pre-constant and agreed rate! 🚀 Then, at
            the end of your RD tenure, you get the reward for your patience and discipline
            in the form of a new interest amount - in addition of your paid-in amounts.
            You can calculate these returns using our recurring deposit calculator now.
          </p><br>
          <p>
            You know what? Almost every bank & cool non-banking financial organization in
            India offers this no-nonsense product: RDs. 🏦✨
          </p><br>
          <p>
            RD interest? The RD interest is compounded quarterly. However, do not forget
            that this interest is also liable for TDS. (Tax deducted at source) ✅ which
            we are not taking into account here in this calculator.
          </p><br>
        </div>
      </div>
      <div class="cla1_b">
      
        <h2>Popular Calculators</h2>

        <div class="popular_calculators" @click="$router.push('/fdCalculator')">
          <span>FD Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/cagr-calculation')">
          <span>CAGR Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/ssy-calculation')">
          <span>SSY Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/sip-calculation')">
          <span>SIP Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/goal-sip-calculation')">
          <span>Goal SIP Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/fire-calculation')">
          <span>FIRE Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/nsc-calculation')">
          <span>NSC Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/hra-calculation')">
          <span>HRA Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/mf-calculation')">
          <span>MF Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/nps-calculation')">
          <span>NPS Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div class="popular_calculators" @click="$router.push('/tax-calculation')">
          <span>Tax Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
      </div>
    </div>
    <!-- <h2>FAQs</h2> -->
    <div class="faq" v-for="(faq, key) in faqs" :key="key">
      <div @click="onFaqSelected(key)" class="faq_q">
        <h3>{{ faq.question }}</h3>
        <font-awesome-icon :icon="faq.selected ? 'fa-minus' : 'fa-plus'" />
      </div>
      <transition name="fade">
        <div v-if="faq.selected" class="faq_an">
          <p>{{ faq.answer }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import ChartDisplay from '../common/ChartDisplay.vue';

export default {
  name: "RdCalculation",
  components: { ChartDisplay },
  data() {
    return {
      monthlyInvestment: 1000,
      annualInterestRate: 5,
      timePeriod: 1,
      chartType: 'line',
    };
  },
  computed: {
    totalInvestment() {
      return this.monthlyInvestment * this.timePeriod * 12;
    },
    maturityValue() {
      return this.calculateRD(this.monthlyInvestment, this.annualInterestRate, this.timePeriod).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    chartData() {
      const labels = Array.from({ length: this.timePeriod * 12 }, (_, i) => `${i + 1}`);
      const data = Array.from({ length: this.timePeriod * 12 }, (_, i) => {
        const t = (i + 1) / 12;
        return this.calculateRD(this.monthlyInvestment, this.annualInterestRate, t);
      });
      return {
        labels,
        datasets: [
          {
            label: 'Maturity Value Over Time',
            data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false
          }
        ]
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              autoSkip: false,
              maxRotation: 90,
              minRotation: 0
            },
            title: {
              display: true,
              text: 'Months'
            }
          },
          y: {
            beginAtZero: true,
            maxTicksLimit: 5,
            title: {
              display: true,
              text: 'Value'
            }
          }
        }
      };
    }
  },
  methods: {
    calculateRD(P, r, t) {
      r = r / 100 / 4;
      const n = t * 4;
      const maturityValue = P * (((1 + r) ** n - 1) / r) * (1 + r);
      return maturityValue;
    }
  }
};
</script>

<style scoped>
@import "../../assets/Calculation.css";
.graph {
  width: 100%;
  height: auto;
}

canvas {
  max-width: 100%;
}
</style>
