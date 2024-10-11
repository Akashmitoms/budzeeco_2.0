<template>
  <div class="bg">
    <div class="sec1">
      <h3>Budzeeco's Exclusive</h3>
      <h1>Masterclass</h1>
      <p>Your first step to <b>Financial Independence!</b></p>
      <button @click="$router.push('/paymentPage')">Book Your Seat Now</button>
    </div>
  </div>
  <section class="sectiona1">
    <div class="sec2">
      <span><font-awesome-icon :icon="['fas', 'graduation-cap']" /></span>
      <h1>Core Masterclass</h1>
      <h3>Master essential money management basics, and other strategies.</h3>
      <div class="sec2_contain">
        <div class="ds_flex">
          <div class="sec2a light">
            <h2>Personal <br> Finanace <br> Mastery</h2>
          </div>
          <div class="sec2b">
            <img src="\img\budzee\anoop_kv -1-fotor-bg-remover.png" alt="">
          </div>
        </div>
        <div class="sec2_con bg_dark"> 
          <h6>Mentor</h6>
          <h3>Anoop KV</h3>
          <div>
            <button class="btn">Book The Seat</button>
            <button class="btn">Learn More</button>
          </div>
        </div>
      </div>
    </div>
    
  </section>
  <PersonalFinance />
</template>

<script>
import PersonalFinance from '../components/SubPages/PersonalFinance.vue';

export default {
  name: "MasterClass",

  components: {
    PersonalFinance,
  }

};
</script>

<style scoped>
.bg {
  background-image: url("/media/bg.0ac90d8f.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sec1 {
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.sec1 h3 {
  font-size: 3rem;
  font-weight: 400;
  font-family: helvetica;
}
.sec1 h1 {
  font-size: 6em;
  font-weight: 700;
  font-family: helvetica;
  letter-spacing: 1px;
  line-height: 9rem;
  background: linear-gradient(90deg, white, #a0cdcd 50%, white);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.sec1 p {
  font-size: 1.2rem;
  font-weight: 400;
  font-family: helvetica;
  margin-top: 15%;
  color: #a0cdcd;
}
.sec1 button {
  background-color: white;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: helvetica;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
}
/* Light backGround */
.sec2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 5%;
  gap: 1.5rem;
  background-color: #d0e4e3;
}
.sec2 h1 {
  color: #0d5152;
  font-size: 3rem;
  font-weight: 700;
  font-family: helvetica;
}
.sec2 h3 {
  color: #898d96;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: helvetica;
}
.sec2 span {
  color: white;
  font-size: 3rem;
  padding: 1% 1.5%;
  background-color: #0d5152;
  border-radius: 50%;
}
.sec2_contain {
  margin-top: 5%;
  border-radius: 20px;
  z-index: 2;
}
.ds_flex {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
}
.sec2a {
  width: 40%;
  text-align: left;
  padding: 1rem;
}
.sec2b {
  width: 60%;
  text-align: left;
  padding: 1rem;
  
}
.sec2_con{
  text-align: left;
  border-radius: 0 0 20px 20px;
  padding: 5%;
}
.sec2_con h6 {
  color: white;
  opacity: 0.7;
  font-size: 1.2rem;
  font-weight: 400;
  font-family: helvetica;
}
.sec2_con h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: helvetica;
}
.btn{
  background-color: white;
  font-size: 1rem;
  font-weight: 400;
  font-family: helvetica;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  margin: 2% 3%;
}
.sec2a h2 {
  color: white;
  font-size: 6vw;
  font-weight: 700;
  font-family: helvetica;
 text-align: center;
}
.sec2b img{
  width: 75%;
}

@media screen and (max-width: 710px) {
  .sec1 h3 {
    font-size: 1.8rem;
  }
  .bg{
    height: 45vh;
  }
  .sec1 h1 {
    font-size: 3.5em;
    line-height: 6rem;
  }
  .sec1 p {
    font-size: 1rem;
  }
  .sec1 button {
    font-size: 1.2rem;
  }
  .ds_flex{
    flex-direction: column-reverse;
    gap: 0;
    margin-top: 0;
  }
  .sec2a, .sec2b{
    width: 100%;
  }
  .sec2a h2 {
    font-size: 12vw;
  }
}
</style>
