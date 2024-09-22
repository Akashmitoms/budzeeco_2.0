<template>
  <div class="page_sec">
    <!-- <img src="../../../public/img/svg/percentage.svg" alt=""> -->
    <section class="section7">
      <h2 class="head_line_b">Fixed Deposit Calculator</h2>
      <p class="head_line_pb">
        This calculator helps you to estimate your returns on Fixed Deposit
      </p>
      <br />
      <h2 class="sub_head_line_b">Effective Returns:</h2>
      <div class="cla1">
        <div class="cla1_a">
          <div class="Effective_returns">
            <div>
              <p>Total Investment:</p>
              <h6 class="value">{{ amountInvested }}</h6>
            </div>
            <div class="v_line"></div>
            <div>
              <p>Total Interest:</p>
              <h6 class="value">{{ totalInterest }}</h6>
            </div>
            <div class="v_line"></div>
            <div>
              <p>Maturity Value:</p>
              <h6 class="value">{{ maturityValue }}</h6>
            </div>
          </div>
          <h2>Input fields:</h2>
          <div class="input_field">
            <label for="">Amount Invested</label>
            <input
              type="text"
              v-model="amountInvested"
              id="input_logo"
              placeholder="Enter Amount"
            />
          </div>
          <div class="input_field">
            <label for="">Annual Interest Rate</label>
            <input
              type="tel"
              v-model="annualInterestRate"
              pattern="[0-9]{1,2}"
              placeholder="Enter percentage"
            />
          </div>
          <div class="input_field">
            <label for="year">FD Interest Structure</label>
            <select v-model.number="interestStructure">
              <option value="12">Yearly</option>
              <option value="6">Half-Yearly</option>
              <option value="3">Quarterly</option>
              <option value="1">Monthly</option>
            </select>
          </div>
          <div class="input_field1">
            <div class="input_field_sub">
              <label for="">Time Period</label>
              <span id="common_input">{{ timePeriod }} years</span>
            </div>
            <input
              type="range"
              v-model.number="timePeriod"
              min="1"
              max="10"
              step="1"
            />
          </div>
          <div class="input_field">
            <label for="">Chart Type</label>
            <select v-model="chartType">
              <option value="line">Line</option>
              <option value="bar">Bar</option>
            </select>
          </div>
          <div class="input_field">
            <label for="">Calculation Method</label>
            <select v-model="calculationMethod">
              <option value="compound">Compound Interest</option>
              <option value="simple">Simple Interest</option>
            </select>
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
          <section class="section8">
            <h2>FD interest calculation formula</h2>
            <p>
              A = P * (1+ r/n) ^ n*t ,<br />
              where I = A – P<br />
              A = Maturity value<br />
              P = Principal amount<br />
              r = rate of interest<br />
              t = Number of years<br />
              n = Compounded interest frequency<br />
              I = Interest earned amount
            </p>
          </section>
          <br />
          <section class="section8">
            <h2>How Our Calculator Can Help You?</h2>
            <p>
              a. Calculates the interest you'll accrue on your FD instantly.<br />
              b. Helps compare interest rates from various banks.<br />
              c. Helps you identify the ideal FD investment amount to reach your
              financial goals. <br />
              d. Guides you toward the right FD type based on your risk appetite
              and investment needs.
            </p>
          </section>
        </div>
      </div>
      <div class="cla1">
        <div class="cla1_a">
          <br />
          <div class="contant">
            <h2>Explanation</h2>
            <p>
              Fixed Deposits (FDs) are like Mr dependable🕵️ – stable and
              predictable. Think of them as strong officers guarding your money,
              offering a safe haven of consistent returns in a volatile
              financial market. It's perfect for those who prefer a smooth
              financial journey & cannot digest even a small storm. Use our
              online Fixed Deposit (FD) Calculator for easy returns
              calculations✅.
            </p>
            <br />
            <p>
              Simplicity is the key with FDs! Choose a tenure that suits your
              dreams, whether it's a short-term goal like buying a car or saving
              for tax purposes. FDs offer a stable option tailored to your
              financial journey. 🎯
            </p>
            <br />
            <p>
              While FD returns may not match riskier options and fetch better
              returns, they shine as a light of protection🛡️ for your
              hard-earned money. In times of financial uncertainty, FDs perform
              a steady waltz offering a reliable income stream for those seeking
              stability with low risk. 🛠️
            </p>
            <br />
            <p>
              And don't forget, you're backed by The Reserve Bank of India
              (RBI)🤝, which ensures scheduled bank deposits up to ₹ 5 lac per
              bank (Please check DICGC for more deets). Your financial fortress
              remains strong even if a bank faces challenges. Consider FDs as
              your financial guardians, ensuring stability and peace of mind in
              the ever-changing financial landscape. They will, however often
              fail to beat inflation, just stating it so that you have full
              clarity on what to expect.
            </p>
            <br />
          </div>
        </div>
        <div class="cla1_b">
          <br />
          <h2>Popular Calculators</h2>
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
            @click="$router.push('/nps-calculation')"
          >
            <span>NPS Calculator</span>
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
      <br />
      <h2 class="sub_head_line_b">FAQs</h2>
      <div>
        <div>
          <div class="faq" v-for="(faq, key) in faqs" :key="key">
            <div @click="onFaqSelected(key)" class="faq_q">
              <h3>{{ faq.question }}</h3>
              <font-awesome-icon
                :icon="faq.selected ? 'fa-minus' : 'fa-plus'"
              />
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
  </div>
</template>

<script>
import ChartDisplay from "../common/ChartDisplay.vue";

export default {
  name: "FdCalculation",
  components: { ChartDisplay },
  data() {
    return {
      amountInvested: 50000,
      annualInterestRate: 5,
      interestStructure: 12,
      timePeriod: 1,
      chartType: "line",
      calculationMethod: "compound",
      faqs: [
        {
          question: "What are the tax rules related to Fixed Deposits?",
          answer:
            "Ah, taxes – the inevitable riddle for Fixed Deposits (FDs). The interest you earn joins the tax party, with the rate dancing in sync with your tax bracket. Beware: if you do not submit a duly filled 15G/15H to your bank and if interest as per the prevailing savings & FD interest rates surpass past INR 40,000 in a fiscal year, Tax Deducted at Source (TDS) will step in. A ~10% cut is taken before your interest amount hits the account, adding a touch of drama to your financial tale. 💸📊",
          selected: false,
        },
        {
          question: "How can you use the Fixed Deposit Calculator?",
          answer:
            "Honestly, now that you have this online FD calculator, there is no need for the FD Interest Calculator Excel tool. This online FD calculator is a real delight I tell you! Enter the investment amount, duration, and corresponding FD interest rates in the calculator and you're done! Your maturity amount will appear like financial magic. 🎩 Remember, the calculator assumes you did not take out the interest portion from the FD account until it matures, okay?",
          selected: false,
        },
        {
          question: "How do you earn more interest in an FD",
          answer:
            " Seeking more interest from your Fixed Deposit? Imagine diving into the secret code of small finance bank FD schemes – where the FD interest rates bloom like rare flowers. Don't forget the DICGC magic & use the spells tactfully! (Don't know how? Our financial freedom academy can help. Check it out!🌷",
          selected: false,
        },
        {
          question: "What duration is the lock-in period for FD investments?",
          answer:
            "Do you mean tax-saver FDs? They are like a set menu – a 5-year lock-in period, so choose whichever scheduled bank that you prefer after checking the interest rates! 📝",
          selected: false,
        },
        {
          question: "What is the minimum amount required to start a bank FD?",
          answer:
            "Starting a bank Fixed Deposit (FD) is easy – just check with the bank and usually, you can begin with as little as ₹1,000 - ₹10,000! 💰🌟",
          selected: false,
        },
        {
          question:
            "What is the diffrence between Tax saver bank FD and Regular FD?",
          answer:
            "Tax Saver FDs lock in your money for 5 years and give tax benefits, while Regular FDs offer more flexibility but without the tax perks! 💰🔒",
          selected: false,
        },
        {
          question:
            "What are the forms to submit to avoid Tax deduction at source?",
          answer:
            "To avoid TDS on Fixed Deposit interest, use the friendly forms: submit form 15G if you're below 60 and form 15H if you're a senior citizen and your taxable income falls below the basic limit! 📄💰",
          selected: false,
        },
        {
          question:
            "Is there a penalty if the bank FD is premeturly withdrown?",
          answer:
            "Sure thing! If you break up with your bank FD before the agreed time, there's usually a penalty involved usually ranging between 0.5% and 1% – check with your bank for the details! 💔💸 I can give you an example though: Say SBI FD interest rates for 4-year FD at the time of booking: 7%. You went to break the FD after 2 tears, in 2025. A prepayment penalty is 1% at this particular bank. FD rates for 2 years were 6% in 2023. Then in 2025, you will get FD interest at the rate of: 6% - 1% which is 5%. Very bad outcome TBH. Better plan your FD investments properly!",
          selected: false,
        },
        {
          question: "What are the type of FD ?",
          answer:
            "Types of FD are: Senior citizen FD, Post office FD, Tax Saving FD, Standard FD, Corporate FD, Cumulative and Non-cumulative FD.",
          selected: false,
        },
      ],
    };
  },
  computed: {
    chartData() {
      const labels = Array.from(
        { length: this.timePeriod + 1 },
        (_, i) => `${i}`
      );
      const data = Array.from({ length: this.timePeriod + 1 }, (_, i) => {
        const t = i;
        if (this.calculationMethod === "compound") {
          return this.calculateCompoundInterest(
            this.amountInvested,
            this.annualInterestRate,
            this.interestStructure,
            t
          );
        } else {
          return this.calculateSimpleInterest(
            this.amountInvested,
            this.annualInterestRate,
            t
          );
        }
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
            ticks: {
              maxTicksLimit: 5,
              callback: function (value) {
                return value.toFixed(2);
              },
            },
            title: {
              display: true,
              text: "Value",
            },
          },
        },
      };
    },
    totalInvestment() {
      return this.amountInvested;
    },
    totalInterest() {
      return (this.maturityValue - this.amountInvested).toFixed(2);
    },
    maturityValue() {
      return this.chartData.datasets[0].data[this.timePeriod].toFixed(2);
    },
  },
  methods: {
    onFaqSelected(faq) {
      this.faqs[faq].selected = !this.faqs[faq].selected;
    },
    calculateCompoundInterest(P, r, n, t) {
      return P * Math.pow(1 + r / (n * 100), n * t);
    },
    calculateSimpleInterest(P, r, t) {
      return P + (P * r * t) / 100;
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
.page_sec {
  padding-top: 7%;
}
</style>
