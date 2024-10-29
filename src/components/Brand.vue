<template>
   <section class="section7">
      <div class="sec1">
      <img src="\img\budzee\brand 1-fotor-29.png" alt="">
      <!-- <img src="../../public/img/budzee/20423-fotor.png" alt=""> -->
      </div>
   </section>
   <section class="section1">
   <div class="container">
            <div class="mil-text-center">
              <h2 class="mil-light mil-mb-30 mil-up zoomOut">The Perks</h2>
              <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut">
               Free product and commissions, grow your following and exclusive access. <br>
               It's basically like you work here.
              </p>
            </div>
            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up">
                  <img
                    src="\img\budzee\icon\icons8-coins-100.png"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                     Free Product
                  </h5>
                  
                      <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">Get rewarded for your sales and sharing.</p>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
                >
                  <img
                    src="\img\budzee\icon\icons8-cash-100.png"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">Cash Commission</h5>
                 
                  <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">Earn 15% to 20% on every purchase that uses your code.</p>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up">
                  <img
                    src="\img\budzee\icon\icons8-idea-100.png"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                     Learn + Grow
                  </h5>
                  <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">Our team will teach you how to perfect your content.</p>
                </div>
              </div>
            </div>
            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up">
                  <img
                    src="\img\budzee\icon\icons8-bookmark-100.png"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                     Experiences
                  </h5>
                      <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">Special invites to events and opportunities.</p>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
                >
                  <img
                    src="\img\budzee\icon\icons8-chat-100.png"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">Insider Access</h5>
                 
                  <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">You'll even have input on what we make next!</p>
                </div>
              </div>
             
            </div>
          </div>
         </section>
</template>

<script>
import { gsap} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default {
  name: 'Brand',

  methods: {
  animaFunction(){
    const zoomOutElements = this.$el.querySelectorAll('.zoomOut');
  zoomOutElements.forEach(zoomOut => {
      gsap.from(zoomOut, {
        scale: 0,
        duration: 1,
        y: 50,
        scrollTrigger: {
          trigger: zoomOut,
          start: 'top 95%',
          end: 'top 81%',
          scrub: 1,
          markers: false
        }
      });
    });
  }
},

 mounted(){
  gsap.registerPlugin(ScrollTrigger);
  this.animaFunction();
 }
};

</script>

<style scoped>
@import '../assets/style1.css';
@import '../assets/style2.css';
@import '../assets/style3.css';

.section7{
   padding-top: 7%;
   background: linear-gradient(90deg, #192626, #1b1d1d);
}
.section1{
   padding-top: 7%;
   background: linear-gradient(90deg, #192626, #1b1d1d);
}


</style>