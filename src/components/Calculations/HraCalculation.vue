<template>
  <section class="section7">
    <h1 class="head_line_b">HRA Calculator</h1>
    <p class="head_line_pb">House Rent Allowance Calculator</p>
    <hr class="hr" />
    <div class="cla1">
      <div class="cla1_a">
        <div class="Effective_returns">
          <div><p>HRA Received:</p><h6 class="value">{{ hraReceived }}</h6></div>
          <div class="v_line"></div>
          <div><p>Exempted HRA:</p><h6 class="value">{{ exemptedHRA }}</h6></div>
          <div class="v_line"></div>
          <div><p>Taxable HRA:</p><h6 class="value">{{ taxableHRA }}</h6></div>
        </div>
        <h2>Input fields:</h2>
        <div class="input_field">
          <label for="">Basic Salary</label>
          <input type="text" v-model="basicSalary" id="input_logo"placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Dearness Allowance</label>
          <input type="text" v-model="dearnessAllowance" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Commission</label>
          <input type="text" v-model="commission" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">HRA Received</label>
          <input type="text" v-model="hraReceived" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">Annual Rent Paid</label>
          <input type="text" v-model="annualRentPaid" id="input_logo" placeholder="Enter Amount" />
        </div>
        <div class="input_field">
          <label for="">City Type</label>
          <select v-model="cityType">
            <option value="metro">Metro</option>
            <option value="non-metro">Non-Metro</option>
          </select>
        </div>
        <br />
      </div>
      <div class="cla1_b">
        <div class="graph">
          <ChartDisplay :chartType="chartType" :data="chartData" :options="chartOptions" />
        </div>
        <br />
        <section class="section8">
          <h2>Formula</h2>
          <p>
            MIN(HRA received, Actual rent paid - 10% of (basic+DA),<br />
            IF(you stay in metrocities,<br />
            50% of (basic+DA),<br />
            40% of (basic+DA)))
          </p>
          <br /></section>
          <section class="section8">
          <h2>How Our Calculator Can Help You?</h2>
          <p>
            a. Calculate HRA exemption that you can get<br />
            b. Understand HRA exemption limit & negotiate salary package accordingly<br />
            c. Know the impact of HRA on your income tax liability <br />
            d. Understand the HRA eligibility, documentation, and tax rules.
          </p></section>
      </div>
    </div>
    <div class="cla1">
      <div class="cla1_a">
        
        <div class="contant">
          <h2>Explanation</h2>
          <p>
            Let's talk about HRA – the salary master that takes care of your stay! 🏡 HRA,
            or House Rent Allowance, is like that extra salary slice given by your boss to
            cover your sweet abode needs.
          </p><br>
          <p>
            Now, to calculate the HRA deduction you need to consider 4 things: 💸 Your
            Salary HRA received Actual rent paid City you call home sweet home
          </p><br>
          <p>
            The final HRA value follows these cool rules: Max HRA claimable is the
            smallest of: HRA from your boss Actual rent paid - 10% of (Basic + DA) 50% of
            (Basic + DA) in metro cities / 40% if you're in a non-metro gem
          </p><br>
          <p>
            Metro cities include Mumbai, Delhi, Chennai, and Kolkata! So, let's keep it
            simple and get that HRA groove on! 🌆🏠💰
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

        <div class="popular_calculators" @click="$router.push('/nsc-calculation')">
          <span>NSC Calculator</span>
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
  name: "HraCalculation",
  components: { ChartDisplay },
  data() {
    return {
      basicSalary: 0,
      dearnessAllowance: 0,
      commission: 0,
      hraReceived: 0,
      annualRentPaid: 0,
      cityType: 'metro',
      chartType: 'line',
      faqs: [
        {
          question:
            "What are the requirements to claim an HRA deduction and how do you calculate HRA?",
          answer:
            "Be a salaried pro.- Embrace the renter's life; living in rented digs is a must. Is your place nearby? No worries, just explain why you need that rented vibe.- Keep those rent receipts & rent agreement safe and sound; they're your golden ticket.- If your annual rent reaches over Rs 1 lakh (which it usually does), show off the landlord's PAN card.",
          selected: false,
        },
        {
          question: "How to claim HRA tax exemption?",
          answer:
            "You hand over rent receipts to your employer when asked or take the charge yourself while filing taxes, but make sure that you claim it!",
          selected: false,
        },
        {
          question: "Under which section can I claim HRA tax exemption?",
          answer:
            " Under Section 10(13A) rule no 2A – that's where the HRA charm happens.",
          selected: false,
        },
        {
          question: "What if HRA is not provided in my salary structure?",
          answer:
            "No HRA in your work playlist? No problem! You can still claim a deduction on the rent paid under section 80GG. Even self -employeed professionals can use 80 GG. This HRA exemption calculator is however, not meant for 80GG deductions.",
          selected: false,
        },
        {
          question: "How much of my HRA is exempt from tax ?",
          answer:
            "50% of the employee's salary is the number to looked up to for HRA tax exemption if you live in any of the Metro cities of India and 40% for non-metropolitan cities.🤑 So calculate your coins using this criteria: Minimum of -HRA from your boss-Actual rent paid minus 10% of (Basic + DA)-50% of (Basic + DA) in metro cities / 40% if you're in a non-metro gem",
          selected: false,
        },
        {
          question: "Can I claim HRA exemption by paying rent to my parents?",
          answer:
            "If your parents own the property, the employee/individual can pay rent to their parents and claim an HRA deduction after entering into a proper agreement with parents and paying them the rental sum. However, if the employee lives with their parents in rented housing and the parents pay the rent, the employee cannot claim the HRA deduction🙅.",
          selected: false,
        },
        {
          question: "Is the landlord's PAN required to claim HRA exemption?",
          answer:
            "If your annual rent payment is less than Rs 100,000, you can claim HRA without a landlord PAN. When your rent crosses the Rs 100,000 threshold, you must get your landlord's PAN.📑✅",
          selected: false,
        },
        {
          question: "Can I claim HRA if I'm also claiming home loan deductions?",
          answer:
            "There are no restrictions to claiming HRA and interest on a home loan at the same time, even if both residences are in the same city. However, there should be enough reason for you to leave the house you purchased and rent another.🏠",
          selected: false,
        },
        {
          question: "What is the documention required for HRA?",
          answer:
            "In order to be eligible for the HRA exemption, the employer will need to receive documentation such as rental agreement and rent receipts. In the event that the annual rent payment exceeds Rs 1 lakh, the home owner's PAN must be provided.",
          selected: false,
        },
      ],
    };
  },
  computed: {
    exemptedHRA() {
      const basicDA = parseFloat(this.basicSalary) + parseFloat(this.dearnessAllowance);
      const hraReceived = parseFloat(this.hraReceived);
      const actualRentPaid = parseFloat(this.annualRentPaid) - 0.1 * basicDA;
      const cityPercentage = this.cityType === 'metro' ? 0.5 : 0.4;
      const cityLimit = cityPercentage * basicDA;

      return Math.min(hraReceived, actualRentPaid, cityLimit).toFixed(2);
    },
    taxableHRA() {
      return (this.hraReceived - this.exemptedHRA).toFixed(2);
    },
    chartData() {
      const labels = ['Basic Salary', 'DA', 'Commission', 'HRA Received', 'Rent Paid'];
      const data = [
        parseFloat(this.basicSalary),
        parseFloat(this.dearnessAllowance),
        parseFloat(this.commission),
        parseFloat(this.hraReceived),
        parseFloat(this.annualRentPaid),
      ];
      return {
        labels,
        datasets: [
          {
            label: 'HRA Components',
            data,
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            maxTicksLimit: 5,
            title: {
              display: true,
              text: 'Amount (INR)'
            }
          }
        }
      };
    }
  },
  methods: {
    onFaqSelected(faq) {
      this.faqs[faq].selected = !this.faqs[faq].selected;
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
