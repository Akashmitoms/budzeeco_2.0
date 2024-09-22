<template>
  <section class="section7">
    <h1 class="head_line_b">NSC Calculator</h1>
    <p class="head_line_pb">National Savings Certificate Calculator</p>
    <hr class="hr" />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>Total Investment:</p><h6 class="value">{{ totalInvestment }}</h6></div>
          <div class="v_line"></div>
          <div><p>Total Interest:</p><h6 class="value">{{ totalInterest }}</h6></div>
          <div class="v_line"></div>
          <div><p>Total Amount:</p><h6 class="value">{{ maturityValue }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Total Investment</label>
          <input type="text" v-model.number="totalInvestment" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="year">Compounding Frequency</label>
          <select v-model.number="compoundingFrequency">
            <option value="1">Yearly</option>
            <option value="2">Half-Yearly</option>
          </select>
        </div>
        <div class="input_field">
          <label for="">Current Interest Rate (%)</label>
          <input type="tel" v-model.number="interestRate" placeholder="Enter percentage" />
        </div>
        <div class="input_field">
          <label for="">Duration</label>
          <input type="text" value="5 Yrs" disabled id="disabled" />
        </div>
        <br />
        <div class="contant">
          <h2>Explanation</h2>
          <p>
            The National Savings Certificate (NSC) is a safe and government-backed savings
            scheme in India🔐, encouraging people to save money. The scheme is open only
            for individual Indian residents and offers nomination facility as well. It
            offers a fixed interest rate of 7.7% per year currently, with a minimum
            investment requirement of ₹.1,000. The lock-in period is 5 years⌚ for the NSC
            scheme, and investors can get tax benefits up to ₹.1.5 lakh under Section 80C
            of the Income Tax Act. Use the post office NSC calculator here for better
            estimation✅.
          </p>
          <br />
          <p>
            HUFs, trusts, NRIs, and companies – we hate to break it to you, but NSC is for
            individuals only. The rest of you, sit this one out!
          </p>
          <br />
          <p>
            NSC returns calculator🧮 provides a definite answer to how much you will get
            out of your NSC. It can be used as collateral for loans. While it offers a
            fixed income, it may not beat inflation. Tax benefits apply to the invested
            amount ( up to ₹.1.5 lakh under Section 80C) and there is no TDS on interest.
            Since for the first 4 years, interest is reinvested into the NSC, it is not
            taxed (upto ₹1.5 lac.) The interest earned in the fifth year however is
            taxable according to the investor's slab rate💰.
          </p>
          <br />
          <p>
            You can invest in NSC electronically💻 or through authorized banks🏦 and post
            offices. Documents necessary to invest in NSC include identity and address
            proofs with a photograph.📑📹
          </p>
          <br />
          <p>
            In summary, NSC is a secure investment suitable for those who prefer stable
            returns and want to save on taxes. Although it may not offer high returns, its
            government support and guaranteed interest make it an appealing choice for
            risk-averse individuals.✅💰
          </p>
          <br />
          <section class="section8">
          <h2>The formula to determine interest</h2>
          <p>
            A = P * (1 + r / n) ^ (n * t) , <br />
            Where,<br />
            I = A – P<br />
            A = Maturity value<br />
            P = Principal amount<br />
            r = Rate of interest per year<br />
            n = Compounding frequency per year<br />
            t = Time period in years<br />
            I = Interest earned amount
          </p></section>
          <section class="section8">
          <h2>How Our Calculator Can Help You?</h2>
          <p>
            a. Calculates the maturity value & interest earned from your NSC investment
            <br />
            b. Helps tailor your investment strategy to achieve your financial goals<br />
            c. Compares NSC returns against other fixed-income options<br />
            d. Lets you have an estimate of how much you need to get say X amount from NSC
            5 years hence.
          </p></section>
        </div>
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
    <br />
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

export default {
  name: "NscCalculation",
  components: { ChartDisplay },
  data() {
    return {
      totalInvestment: 1000,
      compoundingFrequency: 1,
      interestRate: 7.7,
      timePeriod: 5,
      chartType: 'line',
      faqs: [
        {
          question:
            "What is the minimum amount for the National Saving Certificate (NSC) scheme?",
          answer:
            "Starting your NSC journey? Toss in a minimum of ₹.1,000 to get the ball rolling! Feeling extra generous? Go big in ₹100 chunks – no limits on how much love you can show to your NSC account! 🚀",
          selected: false,
        },
        {
          question: "What are the tax implications of NSC?",
          answer:
            "HImagine you invest ₹. 1 lakh in NSC at 7.2%. Each year, the Rs.7,200 interest gets automatically reinvested. The good news: it's taxable, but it gets a deduction pass under section 80C because it's reinvested. Repeat the cycle for years 2, 3, and 4. When the 5-year party ends, the interest from year five faces taxes without a deduction pass. Voila! The NSC tax story is short and sweet! 🌟📉",
          selected: false,
        },
        {
          question: "How does the NSC Calculator work?",
          answer:
            " Do you have NSC related questions? The NSC calculator has answers! 🚀 Just type in your starting cash, pick your savings timeline, toss in the interest rate, hit calculate, and bam! Your savings destiny is revealed. Easy peasy! 🔢",
          selected: false,
        },
        {
          question: "What is the current interest rate on NSC?",
          answer:
            " It offers a fixed interest rate of 7.7% per year. Remember, the govt is the OG here. They can change the rate every 6 months!",
          selected: false,
        },
        {
          question: "Is it possible to withdraw NSC returns before reaching maturity?",
          answer:
            "NSC has a 5-year lock-in period, which means it cannot be withdrawn before maturity except the cases of death /court order.",
          selected: false,
        },
        {
          question: "How does the NSC lump sum investment calculator help you?",
          answer:
            "The online NSC interest calculator computes the maturity value of the NSC investment amount. It considers the interest to be compounded annually. The calculation takes into account the current NSC interest rate, investment amount, and 5 years of fixed duration.",
          selected: false,
        },
        {
          question: "Does post office NSC give more returns?",
          answer:
            "No, all National Savings Certificate (NSC) accounts, regardless of where you purchase them (including post offices), offer the same fixed interest rate determined by the government. ",
          selected: false,
        },
        {
          question: "How much to invest in NSC for retirement per month?",
          answer:
            "To start an NSC account, you must have at least ₹.1,000. You can deposit more money by making additional deposits in the multiples of ₹.100. But it is one time investment. You cannot put money every onth into same NSC. If you want to put money monthly in NSC, you will have to open different NSC each month. The amount you can deposit has no upper limit.",
          selected: false,
        },
        {
          question: "Can I extend my NSC account after 5 years?",
          answer:
            "There is no option to extend, but you can reinvest the maturity amount as per the NSC rules applicable at the time of reinvestment.",
          selected: false,
        },
      ],
    };
  },
  computed: {
    maturityValue() {
      return this.calculateMaturityValue(this.totalInvestment, this.interestRate, this.compoundingFrequency, this.timePeriod).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    chartData() {
      const labels = Array.from({ length: this.timePeriod }, (_, i) => `${i + 1}`);
      const data = Array.from({ length: this.timePeriod }, (_, i) => {
        const t = i + 1;
        return this.calculateMaturityValue(this.totalInvestment, this.interestRate, this.compoundingFrequency, t);
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
    calculateMaturityValue(P, r, n, t) {
      r = r / 100;
      return P * Math.pow(1 + r / n, n * t);
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
