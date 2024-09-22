<template>
  <section class="section7">
    <h1 class="head_line_b">FIRE Calculator</h1>
    <p class="head_line_pb">Financial Independence Retire Early Calculator</p>
    <br />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>Invested Amount:</p><h6 class="value">{{ investedAmount }}</h6></div>
          <div class="v_line"></div>
          <div><p>Amount In Future:</p><h6 class="value">{{ futureValue }}</h6></div>
          <div class="v_line"></div>
          <div><p>Normal SIP Amount:</p><h6 class="value">{{ sipAmount }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Monthly Expense</label>
          <input type="text" v-model.number="amountRequiredToday" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Current Age</label>
          <input type="text" v-model.number="currentAge" id="common_input" placeholder="Enter Age" />
        </div>
        <div class="input_field">
          <label for="">Retirement Age</label>
          <input type="text" v-model.number="retirementAge" id="common_input" placeholder="Enter Age" />
        </div>
        <div class="input_field">
          <label for="">Assumed Inflation Rate</label>
          <input type="text" v-model.number="inflationRate" id="common_input" placeholder="Enter percentage" />
        </div>
        <div class="input_field">
          <label for="">Desired Coast FIRE age</label>
          <input type="text" v-model.number="coastFIREAge" id="common_input" placeholder="Enter Age" />
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
        <div class="popular_calculators" @click="$router.push('/sip-calculation')">
          <span>SIP Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>

        <div class="popular_calculators" @click="$router.push('/cagr-calculation')">
          <span>IRR Calculator</span>
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
  name: "FireCalculation",
  components: { ChartDisplay },
  data() {
    return {
      amountRequiredToday: 1000000,
      currentAge: 30,
      retirementAge: 60,
      inflationRate: 6,
      coastFIREAge: 45,
      chartType: 'line',
    };
  },
  computed: {
    futureValue() {
      const futureValue = this.amountRequiredToday * Math.pow((1 + this.inflationRate / 100), (this.retirementAge - this.currentAge));
      return futureValue.toFixed(2);
    },
    investedAmount() {
      return (this.coastFIREAge - this.currentAge) * 12 * this.sipAmount;
    },
    sipAmount() {
      const r = this.inflationRate / 100 / 12;
      const n = (this.coastFIREAge - this.currentAge) * 12;
      const futureValue = this.futureValue;
      const sipAmount = futureValue * r / (Math.pow(1 + r, n) - 1);
      return sipAmount.toFixed(2);
    },
    chartData() {
      const labels = Array.from({ length: (this.retirementAge - this.currentAge) * 12 + 1 }, (_, i) => `${Math.floor(i / 12)} year`);
      const data = labels.map((_, i) => {
        const t = i / 12;
        const r = this.inflationRate / 100 / 12;
        const n = t * 12;
        return this.sipAmount * (Math.pow(1 + r, n) - 1) / r * (1 + r);
      });
      return {
        labels,
        datasets: [
          {
            label: 'Future Value Over Time',
            data,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            fill: false,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            ticks: {
              autoSkip: true,
              maxRotation: 90,
              minRotation: 0,
            },
            title: {
              display: true,
              text: 'Years',
            },
          },
          y: {
            beginAtZero: true,
            maxTicksLimit: 5,
            title: {
              display: true,
              text: 'Value',
            },
          },
        },
      };
    },
  },
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
