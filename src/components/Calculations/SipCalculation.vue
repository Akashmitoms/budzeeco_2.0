<template>
  <section class="section7">
    <h1 class="head_line_b">SIP Calculator</h1>
    <p class="head_line_pb">Systematic Investment Plan Calculator</p>
    <br />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>Invested Amount:</p><h6 class="value">{{ totalInvestment }}</h6></div>
          <div class="v_line"></div>
          <div><p>Returns Generated:</p><h6 class="value">{{ totalInterest }}</h6></div>
          <div class="v_line"></div>
          <div><p>Total Amount:</p><h6 class="value">{{ maturityValue }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Method</label>
          <select v-model="investmentMethod">
            <option value="SIP">Normal SIP</option>
            <option value="Lumpsum">Step up SIP</option>
          </select>
        </div>
        <div class="input_field">
          <label for="">Monthly SIP Amount</label>
          <input type="text" v-model.number="monthlySIP" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="year">Expected Return (Per year)</label>
          <input type="tel" v-model.number="expectedReturn" placeholder="Enter percentage" />
        </div>
        <div class="input_field1">
          <div class="input_field_sub">
          <label for="">Time Period (Years)</label>
          <span id="common_input">{{ timePeriod }} years</span></div>
          <input type="range" v-model.number="timePeriod" min="1" max="30" />
          
        </div>
        <br />
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay :chartType="chartType" :data="chartData" :options="chartOptions" />
        </div>
        <br />
        <h2>Popular Calculators</h2>

        <div class="popular_calculators" @click="$router.push('/fd-calculation')">
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

        <div class="popular_calculators" @click="$router.push('/rd-calculation')">
          <span>RD Calculator</span>
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

        <div class="popular_calculators" @click="$router.push('/mf-calculation')">
          <span>MF Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>

        <div class="popular_calculators" @click="$router.push('/hra-calculation')">
          <span>HRA Calculator</span>
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
    <br />
  </section>
</template>

<script>
import ChartDisplay from '../common/ChartDisplay.vue';

export default {
  name: "SipCalculation",
  components: { ChartDisplay },
  data() {
    return {
      investmentMethod: "SIP",
      monthlySIP: 5000,
      expectedReturn: 12,
      timePeriod: 10,
      chartType: 'line',
    };
  },
  computed: {
    totalInvestment() {
      return this.monthlySIP * this.timePeriod * 12;
    },
    maturityValue() {
      return this.calculateSIP(this.monthlySIP, this.expectedReturn, this.timePeriod).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    chartData() {
      const labels = Array.from({ length: this.timePeriod }, (_, i) => `${i + 1}`);
      const data = Array.from({ length: this.timePeriod }, (_, i) => {
        const t = i + 1;
        return this.calculateSIP(this.monthlySIP, this.expectedReturn, t);
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
              text: 'Years'
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
    calculateSIP(P, r, n) {
      r = r / 100 / 12;
      n = n * 12;
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
