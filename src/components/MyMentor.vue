<template>
    <section class="section6">
      <div class="sec_a">
        <div class="sec_a1">
          <h1>Financial Planning is easier with a Personal Consultant</h1>
          <h5>Get access to Financial Planners who curate a tailored goal-based investment strategy just for you.</h5>
          <button class="input_btn1" @click="$router.push('/book-call')">Book A Call</button>
        </div>
        <div class="sec_a2">
          <img src="/img/budzee/desk.png" alt="">
        </div>
      </div>
    </section>
    <section class="section2">
      <h1 class="head_line">Ever felt like?</h1>
      <div class="sec_b">
        <div class="sec_b1">
          <h2>Will I ever be able to save enough money for my retirement?</h2>
          <img src="/img/budzee/sld1.png" alt="">
        </div>
        <div class="sec_b1">
          <h2>Do my insurance policies cover enough?</h2>
          <img src="/img/budzee/sld2.png" alt="">
        </div>
        <div class="sec_b1">
          <h2>I wish I could budget for more vacations</h2>
          <img src="/img/budzee/sid6.png" alt="">
        </div>
        <div class="sec_b1">
          <h2>Am I blindly paying excessive taxes?</h2>
          <img src="/img/budzee/sid10.png" alt="">
        </div>
        <div class="sec_b1">
          <h2>But where is the time to plan my finances?</h2>
          <img src="/img/budzee/sid8.png" alt="">
        </div>
      </div>
      <div style="width: 100%;"><button class="btn_pc" @click="$router.push('/book-call')">Book A Call</button></div>
    </section>
   
    <section class="section3">
    <div class="carousel-container">
      <div class="carousel" ref="carousel">
        <div
  class="carousel-item"
  v-for="(item, index) in items"
  :key="index"
  :style="{ minWidth: (100 / slidesToShow) + '%' }"
>
  <div><img :src="item.img" :alt="item.title"></div>
  <div>
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>
  </div>
</div>
        <!-- Clone first 3 items for seamless looping -->
        <div
  class="carousel-item"
  v-for="(item, index) in items.slice(0, slidesToShow)"
  :key="'clone-' + index"
  :style="{ minWidth: (100 / slidesToShow) + '%' }"
>
  <div><img :src="item.img" :alt="item.title"></div>
  <div>
    <h2>{{ item.title }}</h2>
    <p>{{ item.description }}</p>
  </div>
</div>
      </div>
    </div>
  </section>
  
    <section class="section2">
      <h1 class="head_line">What's our expertise and what we do -</h1> <br>
      <div class="sec_d">
        <div class="sec_d1">
          <div><img src="/img/budzee/gl1 (1).png" alt=""></div>
          <div>
          <h2>Introductory Consultation</h2>
          <p>A 30-minute call with your Personal Consultant to
            gain insights into our services and for us to understand your
            finances better and to engage in addressing any queries you may have</p></div>
        </div>
        <div class="sec_d1">
          <div><img src="/img/budzee/gl1 (2).png" alt=""></div>
          <div>
          <h2>Financial Plan Preparation</h2>
          <p>Let’s get talking and understand your Cash flow, Goals, Investments,
            Risk coverage and Tax planning. This will be the base of all our future discussions.</p></div>
        </div>
        <div class="sec_d1">
          <div><img src="/img/budzee/gl1 (3).png" alt=""></div>
          <div>
          <h2>Financial Plan Discussion & Execution</h2>
          <p>Tailor-made solutions will be provided by your Personal Consultant. Corrective steps in current Investments,
            future investments and mapping of assets.</p></div>
        </div>
      </div>
    </section>
    <section class="section4">
      <h1 class="head_line_b">Got Questions?</h1>
      <div v-for="faq in pcFaq" :key="faq.id">
        <div @click="toggleFaq(faq)" class="faq_q">
          <h3>{{ faq.question }}</h3>
          <p v-if="faq.open">{{ faq.answer }}</p>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'PersonalConsultant',
    data() {
      return {
        slidesToShow : 3,
        currentIndex: 0,
        items: [
        { img: '/img/budzee/sid6.png', title: 'Goal-based financial planning', description: 'We all have different goals at various stages of our life. So, let us build a customized financial plan just for you.' },
        { img: '/img/budzee/sid12.png', title: 'Insurance Planning', description: 'We would love to choose the right insurance for you that covers risk for you and your loved ones.' },
        { img: '/img/budzee/sid13.png', title: 'Existing Portfolio Review', description: 'Invested somewhere but not making good returns? Why don’t we look at your portfolio and make some tweaks?' },
        { img: '/img/budzee/sid11.png', title: 'Loan Planning', description: 'Suffocated in a debt trap? Let’s review your existing loans and EMIs and help you get sorted.' },
        { img: '/img/budzee/sid10.png', title: 'Fixed income Investment advisory', description: 'Proposing stable investment options tailored to meet your short-term financial requirements.' },
        { img: '/img/budzee/sld1.png', title: 'Estate Planning', description: 'We also help you keep your assets and investments safe and in the right hands even when you are not around.' },
        { img: '/img/budzee/sld2.png', title: 'Cash flow Management', description: 'Maximize your savings and establish an ideal emergency fund.' },
      ],
     
        pcFaq: [
          {
            id: 1,
            question: "Who needs financial planning?",
            answer: "Well, pretty much everyone! It doesn't matter how much you earn or how old you are. Financial planning helps you reach your goals, manage your spending, save money, and deal with unexpected financial blocks. Whether you're saving for retirement, paying for school, or just trying to make sure you're covered for the future, financial planning can give you a roadmap to follow.",
            open: false
          },
          {
            id: 2,
            question: "Why is financial planning important?",
            answer: "Financial planning is important because it keeps your money goals in check. By keeping an eye on what you earn, spend, save, and invest, you ensure stability and security for you and your crew. Creating a roadmap for your finances, helping you navigate through life's ups and downs while working towards a prosperous future. Without a solid plan, you might end up struggling to make ends meet or may miss out on big milestones like buying a home, starting a business, or chilling out in retirement. So, by taking the time to plan your finances wisely, you can build a solid foundation for your financial well-being and achieve the things you want in life.",
            open: false
          },
          {
            id: 3,
            question: "How much do I have to pay for RIA service?",
            answer: "According to SEBI rules, Registered Investment Advisors (RIAs) can't earn commissions or brokerage fees from investment products. Instead, they charge advisory fees for their services. These fees usually vary based on your income or family situation. This setup ensures you get personalized financial advice without any hidden agendas or conflicts of interest.",
            open: false
          },
          {
            id: 4,
            question: "Is the family included in the financial plan?",
            answer: "Financial planning can encompass individuals or entire families. Those with spouses and children should ideally include the entire family's income and assets in the plan. This inclusive approach ensures that everyone is aligned with common goals, fostering better coordination and financial stability for the entire household.",
            open: false
          },
          {
            id: 5,
            question: "How frequently do I get updates on my plan?",
            answer: "Your financial advisor serves as your one-stop solution. We believe in fostering two-way relationships. Your financial planner will proactively reach out to you on a monthly or quarterly basis to provide updates on your plan. However, if you need to connect between these scheduled updates, you can always schedule a meeting at your convenience.",
            open: false
          },
        ]
      };
    },
    methods: {
        toggleFaq(faq) {
      console.log("faq", faq)
     this.pcFaq.forEach(f =>{
      if(f.id == faq.id){
        f.open = !f.open
      }else{
        f.open = false
      }
     })
    },
    autoSlide() {
      setInterval(() => {
        if (this.currentIndex < this.items.length) {
          this.currentIndex = (this.currentIndex + 1) % (this.items.length + this.slidesToShow);
        } else {
          this.currentIndex = 1; // Reset to first image after loop completes
          const carousel = this.$refs.carousel;
          carousel.style.transition = 'none';
          carousel.style.transform = 'translateX(0)';
          setTimeout(() => {
            carousel.style.transition = 'transform 0.5s ease-in-out';
            carousel.style.transform = `translateX(-${this.currentIndex * 100 / this.slidesToShow}%)`;
          }, 50);
          return;
        }
        const carousel = this.$refs.carousel;
        carousel.style.transform = `translateX(-${this.currentIndex * 100 / this.slidesToShow}%)`;
      }, 3000);
    },
    updateSlidesToShow() {
      const width = window.innerWidth;
      if (width < 768) {
        this.slidesToShow = 1;
      } else if (width < 1024) {
        this.slidesToShow = 2;
      } else {
        this.slidesToShow = 3;
      }
    },
  },
    mounted() {
      
      this.autoSlide();
    this.updateSlidesToShow();
    window.addEventListener("resize", this.updateSlidesToShow);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateSlidesToShow);
  },
  };
  </script>
  
  <style scoped>
  @import '../assets/pc.css';
  
  .carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
  will-change: transform;
}

.carousel-item {
  min-width: 33.33%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px; /* Increased padding for better spacing */
}

.carousel-item img {
  width: 100%;
  height: auto;
  max-height: 300px; /* Adjust this value to ensure images fit well */
  object-fit: cover;
}

.carousel-item div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto; /* Ensures div height is based on content */
}

.carousel-item h2,
.carousel-item p {
  margin: 0; /* Remove default margin for better control */
  padding: 10px 0; /* Add padding for spacing between text */
}

.carousel-item h2 {
  font-size: 1.5em; /* Adjust font size as needed */
}

.carousel-item p {
  font-size: 1em; /* Adjust font size as needed */
}
@media only screen and (max-width: 768px) {
  .sec_a1 h1{
    font-size: 33px;
  }
  .carousel-item {
    min-width: 100%;
  }
}
@media only screen and (max-width: 1024) {
  .carousel-item {
    min-width: 50%;
  }
}
@media only screen and (max-width: 990px) {
  .sec_a{
    display: flex;
    flex-direction: column-reverse;
  }
  .sec_a1{
    width:100%
  }
  .sec_a2{
    width:100%
  }
  .input_btn1 {
    width: 90%;
  }
  .sec_b{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sec_b1{
    width: 100%;
  }
  .sec_d{
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .sec_d1{
    width: 100%;
  }
}


</style>