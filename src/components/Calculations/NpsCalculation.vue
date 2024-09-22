<template>
  <section class="section7">
    <h1 class="head_line_b">NPS Calculator</h1>
    <p class="head_line_pb">National Pension Scheme Calculator</p>
    <hr class="hr" />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div>
            <p>Total Investment:</p>
            <h6 class="value">{{ totalInvestment }}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Lumpsum Amount:</p>
            <h6 class="value">{{ lumpSumAmount }}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Monthly Pension:</p>
            <h6 class="value">{{ monthlyPension }}</h6>
          </div>
        </div>
        <br />
        <div class="Effective_returns">
          <div>
            <p>Final Amount:</p>
            <h6 class="value">{{ maturityValue }}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Pension Amount:</p>
            <h6 class="value">{{ pensionAmount }}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Interest Earned:</p>
            <h6 class="value">{{ totalInterest }}</h6>
          </div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Monthly Contribution</label>
          <input
            type="text"
            v-model.number="monthlyContribution"
            id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">Expected Annual Returns</label>
          <input
            type="tel"
            v-model.number="annualReturns"
            placeholder="Enter percentage"
          />
        </div>
        <div class="input_field">
          <label for="">Your Current Age</label>
          <input
            type="text"
            v-model.number="currentAge"
            id="common_input"
            placeholder="Enter Age"
          />
        </div>
        <div class="input_field">
          <label for="">Retirement Age</label>
          <input
            type="text"
            v-model.number="retirementAge"
            id="disabled"
            value="60"
            disabled
          />
        </div>
        <div class="input_field">
          <label for="">% Allocated for Pension</label>
          <input
            type="tel"
            v-model.number="pensionAllocation"
            placeholder="Enter percentage"
          />
        </div>
        <div class="input_field1">
          <div class="input_field_sub">
          <label for="">% of Pension required in an Year</label>
          <span id="common_input">{{ pensionAmountRequired }}%</span>
        </div>
          <input
            type="range"
            v-model.number="pensionAmountRequired"
            min="0"
            max="100"
          />
          
        </div>
        <div class="cal_note">
          <p>
            Pension will last till <span>{{ pensionDuration }}</span> Years
          </p>
        </div>
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay
            :chartType="chartType"
            :data="chartData"
            :options="chartOptions"
          />
        </div>
        <br />
        <div class="cal_note1">
          <span><font-awesome-icon :icon="['fas', 'sack-dollar']" /></span>
          <p>
            Total taxes you will save under section 80(CCD): ₹4,50,000 (assuming
            30% tax slab)
          </p>
        </div>
        <h2>Popular Calculators</h2>

        <div
          class="popular_calculators"
          @click="$router.push('/nps-calculation')"
        >
          <span>NPS Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/cagr-calculation')"
        >
          <span>CAGR Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/ssy-calculation')"
        >
          <span>SSY Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/rd-calculation')"
        >
          <span>RD Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/sip-calculation')"
        >
          <span>SIP Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/goal-sip-calculation')"
        >
          <span>Goal SIP Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/fire-calculation')"
        >
          <span>FIRE Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/nsc-calculation')"
        >
          <span>NSC Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/hra-calculation')"
        >
          <span>HRA Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/mf-calculation')"
        >
          <span>MF Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
        <div
          class="popular_calculators"
          @click="$router.push('/tax-calculation')"
        >
          <span>Tax Calculator</span>
          <span><font-awesome-icon :icon="['fas', 'chevron-right']" /></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ChartDisplay from "../common/ChartDisplay.vue";

export default {
  name: "NpsCalculation",
  components: { ChartDisplay },
  data() {
    return {
      monthlyContribution: 1000,
      annualReturns: 10,
      currentAge: 30,
      retirementAge: 60,
      pensionAllocation: 40,
      pensionAmountRequired: 50,
      chartType: "line",
    };
  },
  computed: {
    totalInvestment() {
      return (
        this.monthlyContribution *
        12 *
        (this.retirementAge - this.currentAge)
      ).toFixed(2);
    },
    maturityValue() {
      return this.calculateNPS(
        this.monthlyContribution,
        this.annualReturns,
        this.currentAge,
        this.retirementAge
      ).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    lumpSumAmount() {
      return (this.maturityValue * (1 - this.pensionAllocation / 100)).toFixed(
        2
      );
    },
    pensionAmount() {
      return (this.maturityValue * (this.pensionAllocation / 100)).toFixed(2);
    },
    monthlyPension() {
      return (
        (this.pensionAmountRequired * this.pensionAmount) /
        100 /
        12
      ).toFixed(2);
    },
    pensionDuration() {
      return (this.pensionAmount / (this.monthlyPension * 12)).toFixed(2);
    },
    chartData() {
      const labels = Array.from(
        { length: this.retirementAge - this.currentAge + 1 },
        (_, i) => `${i + this.currentAge}`
      );
      const data = labels.map((age) => {
        const t = age - this.currentAge;
        return this.calculateNPS(
          this.monthlyContribution,
          this.annualReturns,
          this.currentAge,
          this.currentAge + t
        );
      });
      return {
        labels,
        datasets: [
          {
            label: "Maturity Value Over Time",
            data,
            borderColor: "rgba(75, 192, 192, 1)",
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
              autoSkip: false,
              maxRotation: 90,
              minRotation: 0,
            },
            title: {
              display: true,
              text: "Years",
            },
          },
          y: {
            beginAtZero: true,
            maxTicksLimit: 5,
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      };
    },
  },
  methods: {
    calculateNPS(P, r, currentAge, retirementAge) {
      r = r / 100 / 12;
      const n = (retirementAge - currentAge) * 12;
      const maturityValue = P * (((1 + r) ** n - 1) / r) * (1 + r);
      return maturityValue;
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
.cal_note {
  margin-top: 20px;
  font-size: 16px;
  padding: 10px;
  background-color: #DBF9D5;
  border: 1px solid #34c759;
}
.cal_note1 span {
  font-size: 30px;
  color: #34c759;
  padding: 15px;
}
.cal_note1 {
  display: flex;
  margin-top: 20px;
  font-size: 16px;
  padding: 10px;
  background-color: #DBF9D5;
  border: 1px solid #34c759;
}
.cal_note1 p {
  padding: 15px;
}
</style>
