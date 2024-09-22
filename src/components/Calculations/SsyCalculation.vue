<template>
  <section class="section7">
    <h1 class="head_line_b">SSY Calculator</h1>
    <p class="head_line_pb">Sukanya Samriddhi Yojana Calculator</p>
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
          <label for="">Start Year</label>
          <select v-model="investmentMethod">
            <option value="SIP">SIP</option>
            <option value="Lumpsum">Lumpsum</option>
          </select>
        </div>
        <div class="input_field">
          <label for="">Yearly Investment</label>
          <input type="text" v-model.number="yearlyInvestment" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="year">Annual Interest Rate</label>
          <input type="tel" v-model.number="interestRate" placeholder="Enter percentage" />
        </div>
        <br />
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay :chartType="chartType" :data="chartData" :options="chartOptions" />
        </div>
        <br />
      </div>
    </div>
    <div class="cla1">
      <div class="cla1_a">
        
        <div class="contant">
          <h2>About SSY Calculator</h2>
          <p>
            Sukanya Samriddhi Yojana (SSY) is like a booster savings plan by the Indian
            government, designed especially for girl children under the age of 10. ✨ SSY
            is not just a savings scheme; it's a fuel for their passions & dreams!
          </p><br>

          <p>
            Parents or guardians can open an SSY account with a minimum deposit of ₹250.
            In a family, at most two accounts can be opened for two girls. (If second one
            is twin, then 3) And guess what? Every contribution is like a wand wave 🪄
            against taxes! ✨💸
          </p><br>
          <p>
            Now, the SSY adventure unfolds over 21 enchanting years. 📆 Along this
            journey, the Sukanya Samriddhi Yojana account grows with a competitive
            interest rate, compounding annually.
          </p><br>
          <p>
            But hold on, it doesn't stop there! When the girl child turns 18, a small part
            (50%) of the SSY treasure chest can be unlocked for special quests like
            education. 📚✨ Imagine your lil one ruling over the world with her 1st class
            education! 🌍 Even if she decides to marry, SSY account can be closed
            prematurely. 🌸
          </p><br>
          <p>
            In essence, Sukanya Samriddhi Yojana is not just an investment plan; a savings
            journey, ensuring that our little ones have the resources they need for a
            future full of dreams and adventures. 🚀👸💰
          </p><br>

          <br />
          <section class="section8">
          <h2>The formula to determine Maturity value</h2>
          <p>
            A = P * (1+ r/n) ^ n*t<br />
            where I = A – P<br />
            A = Maturity value<br />
            P = Principal amount<br />
            r = rate of interest payable n times a year<br />
            t = Number of years<br />
            n = Compounded interest frequency<br />
            I = Interest earned amount<br />
          </p>
          <br /></section>
          <section class="section8">
          <h2>How Our SSY Calculator Can Help You?</h2>
          <p>
            a. Calculate the SSY maturity amount<br />
            b. Determine the monthly contribution amount to get the desired corpus<br />
            c. Compare returns to other investment options for a girl child. <br />
            d. Understand the SSY scheme eligibility, contribution limits, tax benefits,
            and withdrawal rules.
          </p></section>
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
  name: "SsyCalculation",
  components: { ChartDisplay },
  data() {
    return {
      investmentMethod: 'SIP',
      yearlyInvestment: 5000,
      interestRate: 7.6,
      timePeriod: 3,
      chartType: 'line',
      faqs: [
        {
          question: "How to use the SSY calculator?",
          answer:
            "Want to look into the future of your Sukanya Samriddhi Yojana (SSY) investment? easy peasy! Just tap into the SSY calculator. Put in your annual investment sum, the age of the little princess, and the year you're starting this financial adventure. The online calculator will do the math and spill all the details! 🧮💰",
          selected: false,
        },
        {
          question: "When does my SSY investment reach maturity?",
          answer:
            "Your Sukanya Samriddhi Yojana (SSY) scheme matures after 21 years, but the important part is, that you only need to nurture it with contributions for 15 years. After that, let the interest magic continue to work until it reaches its full, financial bloom. It's like planting a money tree that keeps growing! 🌳",
          selected: false,
        },
        {
          question:
            "What are the tax advantages of the SSY (Sukanya Samriddhi Yojana) scheme?",
          answer:
            " Uncover the tax benefits of Sukanya Samriddhi Yojana (SSY)!a.) Contributions under Section 80C bring a maximum deduction of ₹1.5 lakh, a spell to shrink your tax bill. 💸✨b.) The interest, compounding yearly, escapes the clutches of income tax under Section 10, guarding your growing wealth. 🛡️💰c.) When the SSY journey concludes, the funds upon maturity or withdrawal remain untouchable by the income tax. It's your treasure to keep! 🏰🔒",
          selected: false,
        },
        {
          question: "Can an SSY scheme account be opened at any age?",
          answer:
            "The girl child must be an Indian resident and under the age of 10 requirement to embark on this financial adventure! 🚪👧💰",
          selected: false,
        },
        {
          question: "How many accounts can be created under the SSY scheme?",
          answer:
            "In Sukanya Samriddhi Yojana (SSY), a family can open separate accounts for each eligible girl child, up to max 2. For example, if a family has two eligible girls (any girl trying to opt for SSY should be a resident Indian), they can open two SSY accounts—one for each girl child. If second eligible girl is one from a twin girls, both of them can open a SSY account. Well - it goes without saying, only one SSY account is permitted per girl child.",
          selected: false,
        },
        {
          question: "What happens when I do not make any deposits?",
          answer:
            " If you forget to put money into your Sukanya Samriddhi Yojana (SSY) account for a year, it becomes inactive. To start it again, you need to put in some money (₹250 per year) and pay a penalty of ₹50 per defaulted year. Don't worry, though – your account still earns some interest even if you didn't add money that year.",
          selected: false,
        },
        {
          question: "Can an SSY account be closed before maturity?",
          answer:
            "Yes, a Sukanya Samriddhi Yojana (SSY) account can be closed prematurely in the event of the account holder's or guardian's death or if diagnosed with a life threatening illness after 5 years of account opening. In such cases, proper documentation is required for the closure process.",
          selected: false,
        },
        {
          question: "What documents do I require for opening an SSY account?",
          answer:
            "Some of the important documents required are:a.) Sukanya Samriddhi Yojana Opening form.b.) Birth Certificate of the girl.c.) Photograph of the parent/ legal guardian of the girl.d.) KYC Documents of the parent/ guardian.",
          selected: false,
        },
        {
          question: "What is the minimum & maximum investment in SSY?",
          answer:
            "Minimum deposit ₹ 250/- Maximum deposit ₹ 1.5 Lakh in a financial year.",
          selected: false,
        },
        {
          question: "What are other good investment plans for a girl child?",
          answer:
            "Some of the alternative investment plans for a girl child are:a.) Post Office Term Deposit b.) SGBs and Gold ETFsc.) National Savings Certificated.) Mutual Funds",
          selected: false,
        },
      ],
    };
  },
  computed: {
    maturityValue() {
      return this.calculateMaturityValue(this.yearlyInvestment, this.interestRate, this.timePeriod).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    totalInvestment() {
      return this.yearlyInvestment * this.timePeriod;
    },
    chartData() {
      const labels = Array.from({ length: this.timePeriod }, (_, i) => `${i + 1}`);
      const data = Array.from({ length: this.timePeriod }, (_, i) => {
        const t = i + 1;
        return this.calculateMaturityValue(this.yearlyInvestment, this.interestRate, t);
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
    calculateMaturityValue(P, r, t) {
      r = r / 100;
      return P * Math.pow(1 + r, t);
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
