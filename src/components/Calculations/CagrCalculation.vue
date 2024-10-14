<template>
  <section class="section7">
    <h1 class="head_line_b">CAGR Calculator</h1>
    <p class="head_line_pb">Compound Annual Growth Rate Calculator</p>
    <hr class="hr" />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>Total Investment: </p> <h6 class="value">{{ initialInvestment }}</h6></div>
          <div class="v_line"></div>
          <div><p>CAGR: </p> <h6 class="value">{{ formatedNumber }}%</h6></div>
          <div class="v_line"></div>
          <div><p>Final Value: </p><h6 class="value">{{ finalValue }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Initial Investment</label>
          <input type="text" v-model="initialInvestment" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Final Value</label>
          <input type="text" v-model="finalValue" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field1">
          <div class="input_field_sub">
          <label for="">Duration (Years)</label>
          <span id="common_input">{{ timePeriod }} years</span> </div>
          <input type="range" v-model.number="timePeriod" min="1" max="10" step="1" />
        </div>
        <div class="input_field">
          <label for="">Chart Type</label>
          <select v-model="chartType">
            <option value="line">Line</option>
            <option value="bar">Bar</option>
          </select>
        </div>
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay :chartType="chartType" :data="chartData" :options="chartOptions" />
        </div>
        <br />
        <section class="section8">
          <h2>Formula to calculate Compound Annual Growth Rate</h2>
          <p>
            CAGR = ((Vfinal/ Vinitial)^1/t) - 1 <br />
            Vfinal = Final Value<br />
            Vinitial = Beginning Value<br />
            T= Time in years
          </p><br>
        </section>
        
      </div>
    </div>
    <div class="cla1">
      <div class="cla1_a">
        <section class="section8">
          <h2>How Our CAGR calculator Can Help You?</h2>
          <p>
            a. Helps you understand the consistent growth rate of your investments with
            precise CAGR calculations. <br />
            b. Compare the CAGR of different investment options, including mutual funds,
            stocks, and bonds.<br />
            c. Helps you set realistic and achievable financial goals.<br />
            d. Helps you get insights into different investment strategies like SIPs and
            lump sums and optimize your portfolio.
          </p>
        </section>
        <br />
        <div class="contant">
          <h2>About Compound Annual Growth Rate Calculator</h2>
          <p>
            CAGR (compound annual growth rate) is like a cool magician🧙‍♂️ in the finance
            world! It gives you a smooth picture of how your money grows - one year at a
            time, much better than just looking at regular total growth. It's like having
            magic glasses 👓 for your investment, considering the compounding effect and
            showing a more accurate picture of how your money has been or might be
            growing. So, when you're planning for the future or making important money
            decisions, the CAGR calculator for stocks or for MFs is your helpful guide
            🌟!.
          </p><br>
          <p>
            Example: Imagine you stumbled upon a stash of money 💰 say ₹ 2,000 in a
            kitchen jar that you had forgotten about. You invested it neatly. Fast forward
            5 years and it has multiplied into a cool ₹ 5,000! 🚀 At first glance, it
            seems like a growth of (₹5,000 - ₹ 2,000) / 5 = ₹ 600 per year. Pretty
            impressive, right? 🤯 30% growth per year (₹600 is 30% of ₹2000) - how's that?
          </p><br>
          <p>
            Hold your horses! 🧙‍♂️ That's crap. Use our magical CAGR formula ✨: [(Final
            Value / Initial Value)^(1 / Number of Years) - 1]. Drumroll, please... 🥁 The
            CAGR reveals the real growth rate - approximately 20.11%! 🎩💫
          </p><br>
          <p>
            Thus, this CAGR (compound annual growth rate) calculator is a tool that will
            help you assess the compounding effect correctly. It's like a secret financial
            ally! 💰🌟 So - go, use it now!
          </p><br>
          
        </div>
      </div>
      <div class="cla1_b">
      
        <h2>Popular Calculators</h2>

        <div class="popular_calculators" @click="$router.push('/fdCalculator')">
          <span>FD Calculator</span>
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

    <h2 class="sub_head_line_b">FAQs</h2>

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
import {formatNumber } from '../CommonFunction/functions.js';

export default {
  name: "CagrCalculation",
  components: { ChartDisplay },
  data() {
    return {
      initialInvestment: 10000,
      finalValue: 20000,
      timePeriod: 1,
      chartType: 'line',
      faqs: [
        {
          question: "How to calculate the CAGR?",
          answer: "Well, you may be afraid of the complex math in general, but this is pretty easy peasy. CAGR = ((Vfinal/ Vinitial)^1/t) - 1 Vfinal = Final Value Vinitial = Beginning Value T= Time in years. The best way to calculate 👉 Honestly CAGR calculator excel tool is a thing of the past. Simply use the CAGR calculator provided above!",
          selected: false,
        },
        {
          question: "How does the CAGR calculator work?",
          answer: "This online CAGR calculator makes crunching numbers a breeze! I bet it is the best CAGR calculator in India!😎 Just pop in your Initial Investment, the Final value of your investment, and the investment duration. Click and voila! The calculator serves your compound annual growth cate (CAGR) on a silver platter.",
          selected: false,
        },
        {
          question: "Can you use the CAGR calculator for SIP?",
          answer: " Not really. There is a better tool known as XIRR for that.",
          selected: false,
        },
        {
          question: "What sets XIRR apart from CAGR?",
          answer: "The CAGR formula calculator rocks for solo investments, but when the investment party involves mutual fund SIPs and their rollercoaster earnings over various timeframes, it's time to bring in the XIRR armor!  While CAGR might not be able to catch so many inflows and outflows, XIRR can combine multiple CAGRs for a bird's eye view. Perfect for handling the mutual fund investment bucket with regular SIPs or occasional ad-hoc investments!",
          selected: false,
        },
        {
          question: "What is the concept of CAGR return within mutual funds?",
          answer: "As we said, the CAGR calculator for sip does not work well. CAGR works wonders for tracking the performance of lump-sum mutual fund investments. It unveils the average annual compound growth of your mutual fund bet.  Imagine investing ₹ 2 lakh in XYZ mutual fund in 2015, and three years later, you're cashing out ₹ 2,50,000. Crunch the numbers with the CAGR calculator and you get the analyzing work done like a pro: 7.72% growth annually! This CAGR calculator online crunches these numbers based on the logic explained earlier. CAGR = ((Vfinal/ Vinitial)^1/t) - 1 To calculate the CAGR of the above mutual fund: CAGR = (2,50,000 / 2,00,000) ^ (⅓) – 1 = 7.7217%",
          selected: false,
        },
        {
          question: "How does absolute return differ from CAGR?",
          answer: "Absolute return is like the loud and clear percentage shouting from the mountaintop – 'I grew 100%! 🚀' Take ₹10,000 investment in 2016, turn it into ₹ 20,000 in 2020, and boom, absolute return is 100%. CAGR is the smooth operator, sipping tea and saying, 'Let me calculate the accurate growth rate.' For the same gig: CAGR is a neet 18.92% –  That makes CAGR a subtle genius in the room! Let me explain in detail the calculations for the above scenario:- Absolute Return =(Amount at End - Initial Amount) / (Initial Amount) * 100. Absolute Return = (20,000 - 10,000) / 10,000 = 100%. CAGR = (End Value) / (Initial Value) ^ (1/n) - 1. CAGR = (20,000) / (10,000) ^ (1/4) - 1. CAGR = 18.92%. I hope this helps you float over the sea of financial jargon!",
          selected: false,
        },
        {
          question: "How does CAGR show Business Growth?",
          answer: "The mean annual growth rate of an investment over a predetermined time period greater than a year is known as the compound annual growth rate, or CAGR. It is among the most precise methods for figuring out returns for investments made in inventories, products, logistics, employees etc. and the returns being generated through them over a period of time.",
          selected: false,
        },
        {
          question: "What is a promising CAGR for a company?",
          answer: "There is no accurate measure as to how much CAGR is good for a company. However, A corporation should aim for a compound annual growth rate (CAGR) of 5% to 10% in sales revenue.  Also, a CAGR of 10%–20% would be beneficial for sales for a company that has been in business for more than five years. However, it does vary a lot. For instance, a CAGR of 20% or more is regarded as good in the IT sector and a CAGR of 15% or more is seen as good in the e-commerce sector.",
          selected: false,
        },
      ],
    };
  },
  computed: {
    chartData() {
      const labels = Array.from({ length: this.timePeriod + 1 }, (_, i) => `${i}`);
      const data = Array.from({ length: this.timePeriod + 1 }, (_, i) => {
        const t = i;
        return this.calculateCAGR(this.initialInvestment, this.finalValue, t);
      });
      return {
        labels,
        datasets: [
          {
            label: 'CAGR Over Time',
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
            beginAtZero: false,
            maxTicksLimit: 4,
            callback: function(value) {
              return value.toFixed(2);
            },
            title: {
              display: true,
              text: 'CAGR (%)'
            }
          }
        }
      };
    },
    cagr() {
      return ((this.calculateCAGR(this.initialInvestment, this.finalValue, this.timePeriod) - 1) * 100).toFixed(2);
    },
    formatedNumber() {
      return formatNumber(this.cagr);
    }
  },
  methods: {
    onFaqSelected(faq) {
      this.faqs[faq].selected = !this.faqs[faq].selected;
    },
    calculateCAGR(initial, final, t) {
      if (t === 0) return initial;
      return initial * Math.pow((final / initial), 1 / t);
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
