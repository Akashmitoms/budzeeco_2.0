<template>
  <section class="section7">
    <h1 class="head_line_b">MF Calculator</h1>
    <p class="head_line_pb">
      This calculator helps you to estimate your returns on mutual fund Deposit
    </p>
    <br />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>Total Investment:</p><h6 class="value">{{ totalInvestment }}</h6></div>
          <div class="v_line"></div>
          <div><p>Total Interest:</p><h6 class="value">{{ totalInterest }}</h6></div>
          <div class="v_line"></div>
          <div><p>Maturity Value:</p><h6 class="value">{{ maturityValue }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Method</label>
          <select v-model="method">
            <option value="sip">SIP</option>
            <option value="lumpsum">Lumpsum</option>
          </select>
        </div>
        <div class="input_field" v-if="method === 'sip'">
          <label for="">Monthly Investment</label>
          <input type="text" v-model.number="monthlyInvestment" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field" v-if="method === 'lumpsum'">
          <label for="">Lumpsum Investment</label>
          <input type="text" v-model.number="lumpsumInvestment" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Expected Annual Returns (%)</label>
          <input type="tel" v-model.number="annualReturns" placeholder="Enter percentage" />
        </div>
        <div class="input_field1">
          <div class="input_field_sub">
          <label for="">Time Period (years)</label>
          <span id="common_input">{{ timePeriod }} years</span></div>
          <input type="range" v-model.number="timePeriod" min="1" max="30" step="1" />
        </div>
        <br />
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay :chartType="chartType" :data="chartData" :options="chartOptions" />
        </div>
        <br />
        <section class="section8">
          <h2>The formula to determine Mutual fund returns</h2>
          <p>
            Let P = Principal or initial investment,<br />
            A = Accumulated amount at the end of the term<br />
            n = number of years of investment (term of investment)<br />
            i = assumed average rate of return per year in percentage<br />
            Then, Mutual fund returns can be found out using the formula: A = P (1+i)^n<br />
          </p>
          <br /></section>
          
      </div>
    </div>
    <div class="cla1">
      <div class="cla1_a">
        <section class="section8">
          <h2>How Our Calculator Can Help You?</h2>
          <p>
            a. Calculate mutual fund returns that you have intvested in.<br />
            b. Determine the investment amount to reach financial goals.<br />
            c. Compare returns from various types of mutual funds in India. <br />
            d. Learn about how much your lumpsum investment can accumulate to at assumed
            rate.
          </p></section>
        <div class="contant">
          <h2>Explanation</h2>
          <p>
            A mutual fund is a collection of money that is professionally managed by a
            fund manager🧐. It is a 'trust' that collects money from a group of
            individuals with similar financial goals and invests it in stocks, bonds,
            money market instruments, and/or other securities as per the mutual fund
            scheme's mandate.💰
          </p><br>

          <p>
            If you want to invest a lump sum in a mutual fund, you need to know your
            future accumulated amount based on the expected returns for the entire period.
            Suppose you invest ₹100 in a mutual fund assuming an annual return of 12%. You
            intend to invest for five years. What can you expect at the end of five years?
            ₹176.23. How did we get it a jiffy?🤔
          </p><br>
          <p>
            Let us now decode the magic compound interest formula ✨ used in the mutual
            fund investment calculator here. We are not taking the gains out of the fund
            at the end of each year. They remain in the fund and compound year after year.
            So at the end of the first year, as per the compound interest formula, your
            accumulation will be equal to 100*1.12.
          </p><br>
          <p>
            At the beginning of second year, now your P = 100*1.12, so accumulation at the
            end of second year will be 100*1.12*1.12 that is, 100(1.12)^2
          </p><br>
          <p>And this process continues for n years. Hence, we get the formula as:🥳</p>
          <p>A = P(1+i)^n</p>
          <br />
          
        </div>
      </div>
      <div class="cla1_b">
      
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
    <h2 class="sub_head_line_b">FAQs</h2>
    <div>
      <div>
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
      </div>
    </div>
  </section>
</template>

<script>
import ChartDisplay from '../common/ChartDisplay.vue';

export default {
  name: "MfCalculation",
  components: { ChartDisplay },
  data() {
    return {
      method: 'sip',
      monthlyInvestment: 1000,
      lumpsumInvestment: 10000,
      annualReturns: 12,
      timePeriod: 5,
      chartType: 'line',
      faqs: [
        {
          question:
            "Mutual fund returns will vary every year. How does the Mutual fund return calculator take care of this?",
          answer:
            "Think of the formula as planning a road trip. It gives you a rough estimate of how much rains you might have to face each day. Since mutual fund returns are unpredictable, it's like packing an umbrella for the financial weather – a cautious but fair guess of what to expect over the entire journey. It helps you plan realistically for the financial road ahead. 🚗",
          selected: false,
        },
        {
          question:
            "Can we use this formula for all types of mutual funds, like equity, hybrid, debt, liquid funds, etc?",
          answer:
            "YES! It's like saying, 'Sure thing, as long as you know how long you're in for the investment ride and can make a good guess about how much interest you might get, you're good to go!' It's all about keeping it easy & making sure you're on board with the plan.💸",
          selected: false,
        },
        {
          question: "Does the mutual fund sip calculator take care of the taxation part?",
          answer:
            " No it does not🙅. Tax stuff is like a personal puzzle and it depends on your situation and the kind of mutual fund you pick. So, for the nitty-gritty on post-tax gains, you'll need to dive into the tax details yourself. 💸",
          selected: false,
        },
        {
          question: "Does this formula take into account dividend payouts?",
          answer:
            "No, it only takes into account the final fund value on the date of redemption. While it may work well in the case of a growth mutual fund, for other cases like IDCW, payouts in between are not accounted for.",
          selected: false,
        },
        {
          question: "How does The 1% Club mutual fund calculator work?",
          answer:
            "Simply choose your initial contribution, projected annual return, and number of years invested, and voilà, you have your entire invested money, returns earned, and total amount is out in a flash!",
          selected: false,
        },
      ],
    };
  },
  computed: {
    totalInvestment() {
      return this.method === 'sip'
        ? (this.monthlyInvestment * 12 * this.timePeriod).toFixed(2)
        : this.lumpsumInvestment.toFixed(2);
    },
    maturityValue() {
      return this.method === 'sip'
        ? this.calculateSIP(this.monthlyInvestment, this.annualReturns, this.timePeriod).toFixed(2)
        : this.calculateLumpsum(this.lumpsumInvestment, this.annualReturns, this.timePeriod).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    chartData() {
      const labels = Array.from({ length: this.timePeriod }, (_, i) => `${i + 1}`);
      const data = Array.from({ length: this.timePeriod }, (_, i) => {
        const t = i + 1;
        return this.method === 'sip'
          ? this.calculateSIP(this.monthlyInvestment, this.annualReturns, t)
          : this.calculateLumpsum(this.lumpsumInvestment, this.annualReturns, t);
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
    onFaqSelected(faq) {
      this.faqs[faq].selected = !this.faqs[faq].selected;
    },
    calculateSIP(monthlyInvestment, annualReturns, timePeriod) {
      const i = annualReturns / 100 / 12;
      const n = timePeriod * 12;
      return monthlyInvestment * (((1 + i) ** n - 1) / i) * (1 + i);
    },
    calculateLumpsum(lumpsumInvestment, annualReturns, timePeriod) {
      const i = annualReturns / 100;
      return lumpsumInvestment * (1 + i) ** timePeriod;
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
