<template>
  <section class="section7">
    <h1 class="head_line_b">Tax Calculator</h1>
    <p class="head_line_pb">Old Vs New Tax Calculator</p>
    <br />
    <h2 class="sub_head_line_b">Effective Returns:</h2>
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div>
            <p>Tax under Old Regime </p><h6 class="value">{{ totalInvestment }}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Tax under New Regime</p><h6 class="value">{{ totalInterest }}</h6>
          </div>
        </div>
        <h2>Input fields:</h2>
        <p class="head_line_pb">Incomes</p>

        <div class="input_field">
          <label for="">Salaried Income</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">Rental Income</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">Business Income</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">Other Income</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>

        <h3 class="head_line_pb">Deductions</h3>

        <div class="input_field">
          <label for="">Standard Deductions</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="disabled"
            placeholder="Enter Amount" disabled
          />
        </div>
        <div class="input_field">
          <label for="">Interest on Home loan (Section 24b)</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>

        <h3 class="head_line_pb">Old Regime</h3>

        <div class="input_field">
          <label for="">Employee Deductions</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">80C, 80CCD(1), 80CCC</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">80D</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">80E</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">Other Deductions</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>

        <h3 class="head_line_pb">New Regime</h3>

        <div class="input_field">
          <label for="">Employee Deductions</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <div class="input_field">
          <label for="">Other Deductions</label>
          <input
            type="text"
            v-model.number="monthlyInvestment" id="input_logo"
            placeholder="Enter Amount"
          />
        </div>
        <br />
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
        <section class="section8">
          <h2>Income Tax Slab Rates For FY 2022-23 (AY 2023-24) for resident or NRI below age 60 & HUFs</h2>
          <p>
            Let P = Principal or initial investment,<br />
            A = Accumulated amount at the end of the term<br />
            n = number of years of investment (term of investment)<br />
            i = assumed average rate of return per year in percentage<br />
            Then, Mutual fund returns can be found out using the formula: A = P (1+i)^n<br />
          </p>
          <br /></section>
          <section class="section8">
          <h2>How Our Calculator Can Help You?</h2>
          <p>
            1. Instant Tax Clarity: Calculate your income tax burden quickly and easily, determining how much you owe depending on your age, income and investments.
            <br />
            2. Optimise Savings: Investigate the impact of tax-saving instruments on your taxable income to uncover ways to maximise your savings and lower your overall tax burden.
            <br />
            3. Informed Decision-Making: Confidently navigate between the Old and New Tax Regimes, making informed decisions that correspond with your financial goals. Remain up to date on the most recent Union Budget developments for successful financial planning. <br />
            
          </p></section>
      </div>
    </div>
    <div class="cla1">
      <div class="cla1_a">
        
        <div class="contant">
          <h2>Explanation</h2>
          <p>
            Introduce yourself to a journey of financial genius with the Income Tax
            Calculator🥳, your trusted guide to unlocking the mysteries of annual tax
            liabilities🤝. Consider a calculator so simple that it makes the difficult
            chore of calculating taxes a piece of cake🥮. This calculator simplifies
            complex data by smoothly incorporating the most recent Union Budget tax bands,
            providing a clear picture of your yearly tax obligations😄.
          </p><br>

          <p>
            The government collects income tax on an individual's earnings💵. The income
            tax rules apply to individuals🙎, Hindu Undivided Families (HUFs)👪,
            businesses🎯, cooperative organizations🏭, trusts and other institutions🚀.
            Tax slabs are used to assess a person's income tax based on their age and
            earnings. A person's taxable income is calculated after adjusting for any
            exemptions, deductions, and rebates. The deductions, exemptions, and other
            rules may be amended based on the Union Budget proposed for every fiscal year.
            To make computations easy, you may now use the Income Tax Calculator to
            calculate your taxable income✅.
          </p><br>
          <p>
            India currently has two✌️different income tax regimes and people can choose to
            pay taxes under either the new income tax regime or the old tax regime. This
            has created a lot of confusion among taxpayers about the choice between the
            old and new tax regimes🤷. The new tax regime is chosen by default, starting
            FY 23-24. As an individual taxpayer, you are free to select old or new tax
            regime as long as you do not have any business/profession income and you file
            your return within the due date. If you do have business or professional
            income, you can only switch once in a lifetime within the due date. ✅
          </p><br>
          <p>
            The government ultimately desires to make taxpayers move to the new system and
            eventually phase out the old one. Budget 2020 established a new tax framework
            in which tax slabs were restructured. Those who choose the new regime, will
            have comparatively lower tax rates but they will be unable to claim several
            exemptions and deductions, including HRA, LTA, 80C, 80D, and others🙅. The old
            regime provides over 70 exemptions and deductions including HRA and LTA, that
            can reduce your taxable income and cut your tax payments. Section 80C is the
            most popular deduction, allowing taxpayers to reduce their taxable income by
            up to Rs.1.5 lakh. 😄
          </p><br>
          <p>
            Now with that said, let us step into the Wonderland of Financial Clarity: The
            old vs new tax regime selector! 🚀✨
          </p><br>
          <p>The steps of using this income tax calculator are:</p><br>
          <p>
            Step 1: In the income details tab, add your:- 👔Salaried Income 🏠 Rental
            Income 🎯 Business Income 🤫 Other Income
          </p><br>
          <p>
            Step 2: In the 'Deduction details' section, add in the amounts for Interest on
            the Home loan (Section 24b)
          </p><br>
          <p>
            Step 3 (old regime): In the 'Deductions' section, add in the amounts as per
            the old regime: 1. 80C, 80CCD(1), 80CCC - 80C (Term Insurance policies, PPF,
            ELSS Funds, EPF etc), 80CCD(1) (National Pension Scheme), 80CCC
            (Annuity/Pension plans) 💰 2. 80 D- (Health Insurance Policies for self,
            spouse, dependent children and parents) 🩺 3. 80 E- (Interest on Education
            Loan) 🧑‍🎓 4. Other deductions 🤫
          </p><br>
          <p>
            Step 3 (new regime): In the Deductions section, add in the amounts as per the
            new regime: 1. NPS deductions 👔 2. Other deductions 🤫
          </p><br>
          <p>
            Enter these details diligently & voilà!✨ Witness the magic as this calculator
            explains the differences and guides you through the maze of tax regimes. Find
            the right path for your tax planning journey🛣️, see if it's better to choose
            an old regime or a new regime🌟🔍
          </p>
          <br />
         
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

        <div class="popular_calculators" @click="$router.push('/cagr-calculation')">
          <span>IRR Calculator</span>
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
import ChartDisplay from "../common/ChartDisplay.vue";

export default {
  name: "MfCalculation",
  components: { ChartDisplay },
  data() {
    return {
      method: "sip",
      monthlyInvestment: 1000,
      lumpsumInvestment: 10000,
      annualReturns: 12,
      timePeriod: 5,
      chartType: "line",
      faqs: [
        {
          question:
            "How much tax will be decducted from my salary?",
          answer:
            "The tax will be charged according to your income slab. Please refer to the table above to check the slab rates under the old and new tax regime. ",
          selected: false,
        },
        {
          question:
            "What is the Income Tax Calculator?",
          answer:
            "The Income Tax Calculator is a simple online tool that allows you to estimate your taxes based on your income once the Union Budget has been released.",
          selected: false,
        },
        {
          question: "Does everyone have to file their income tax returns?",
          answer:
            "No, if your gross income is less than the basic exemption amount, you do not need to file income tax returns. However, people with an income less than Rs 2.5L who wish to claim an income tax refund must file an ITR. If your gross income exceeds the basic exemption level, it is necessary to file income tax returns within the due date.",
          selected: false,
        },
        {
          question: "Is standard deduction available under the new tax regime?",
          answer:
            "Salaried individuals and retirees (including family pensioners) can make use of the standard deduction under the new tax system. An individual who adopts the new tax system for fiscal year 2023-24 is eligible for a standard deduction of Rs 50,000.",
          selected: false,
        },
        {
          question: "Can TDS refund be claimed in the new regime?",
          answer:
            "The TDS (Tax Deducted at Source) is the tax that is being deducted by your employer before paying you the total salary. If your tax liability is less than TDS deducted, you can claim the refund for the same.",
          selected: false,
        },
      ],
    };
  },
  computed: {
    totalInvestment() {
      return this.method === "sip"
        ? (this.monthlyInvestment * 12 * this.timePeriod).toFixed(2)
        : this.lumpsumInvestment.toFixed(2);
    },
    maturityValue() {
      return this.method === "sip"
        ? this.calculateSIP(
            this.monthlyInvestment,
            this.annualReturns,
            this.timePeriod
          ).toFixed(2)
        : this.calculateLumpsum(
            this.lumpsumInvestment,
            this.annualReturns,
            this.timePeriod
          ).toFixed(2);
    },
    totalInterest() {
      return (this.maturityValue - this.totalInvestment).toFixed(2);
    },
    chartData() {
      const labels = Array.from({ length: this.timePeriod }, (_, i) => `${i + 1}`);
      const data = Array.from({ length: this.timePeriod }, (_, i) => {
        const t = i + 1;
        return this.method === "sip"
          ? this.calculateSIP(this.monthlyInvestment, this.annualReturns, t)
          : this.calculateLumpsum(this.lumpsumInvestment, this.annualReturns, t);
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
