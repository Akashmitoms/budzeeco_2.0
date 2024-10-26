<template>
  <section class="common_padding">
    <div class="dm1">
      <img src="\img\budzee\piggybank-1.jpg" alt="" />
    </div>
  </section>
  <section class="bg_dark dm2">
    <h2>Start your journey towards becoming debt free today!</h2>
    <button @click="$router.push('/inquiryForm')">Get Callback from Our Experts</button>
  </section>
  <section class="section_b" ref="sectionB">
    <h2>How does Anti-Harassment Service (AHS) work?</h2>
    <div class="container_sec2">
      <div class="sec2">
        <span
          ><font-awesome-icon :icon="['fas', 'person-circle-check']"
        /></span>
        <h3>1. Sign up with Us for AHS</h3>
      </div>
      <div class="sec2">
        <span><font-awesome-icon :icon="['fas', 'headset']" /></span>
        <h3>2. Get unique call forwarding number</h3>
      </div>
      <div class="sec2">
        <span><font-awesome-icon :icon="['fas', 'phone-volume']" /></span>
        <h3>3. Set up call forwarding to avoid harassment</h3>
      </div>
    </div>
    <div class="container_sec2">
      <div class="sec2">
        <span
          ><font-awesome-icon :icon="['fas', 'mobile-screen-button']"
        /></span>
        <h3>4. Harassment calls get forwarded to our lawyers</h3>
      </div>
      <div class="sec2">
        <span><font-awesome-icon :icon="['fas', 'people-arrows']" /></span>
        <h3>5. Our lawyers intervene where necessary</h3>
      </div>
      <div class="sec2">
        <span><font-awesome-icon :icon="['fas', 'user-shield']" /></span>
        <h3>6. Our resolution team works in parallel</h3>
      </div>
    </div>
  </section>
  <section>
    <div class="dm3">
      <h2>How does Loan resolution work?</h2>
      <h4>There are 5 phases in Loan Resolution process:</h4>
      <div>
        <div class="dm3_container">
          <div class="dm3_con"><p>Check Eligibility</p></div>
          <div class="dm3_con"><p>Negotiate with Bank</p></div>
        </div>
        <div class="dm3_container">
          <div class="dm3_con"><p>Enrol with Us</p></div>
          <div class="dm3_con"><p>Resolve with Bank</p></div>
        </div>
        <div class="dm3_container">
          <div class="dm3_con"><p>Save for Loan resolution</p></div>
          <div class="dm3_con"><p>Become Loan Free!!</p></div>
        </div>
      </div>
    </div>
  </section>
  <section class="dm4p">
    <div class="dm4">
      <h2>OUR SERVICES</h2>
      <div class="dm4_container">
        <div class="dm4_con">
          <img src="/img/budzee/loan (2).jpg" alt="" />
          <h3>Loan Payment Issues</h3>
          <p>
            We can help you find solutions to your financial difficulties that
            will allow you to pay back less than what you owe and avoid becoming
            a willful defaulter if you have taken loans and are unable to pay
            back.
          </p>
        </div>
        <div class="dm4_con">
          <img src="/img/budzee/loan (1).jpg" alt="" />
          <h3>Credit Card Loan issues</h3>
          <p>
            If you are not able to pay your Credit Card dues and the bank is
            threatening and hounding you, our lawyers can evaluate the situation
            and assist you.
          </p>
        </div>
        <div class="dm4_con">
          <img src="/img/budzee/loan (3).jpg" alt="" />
          <h3>Recovery Agents Harassment</h3>
          <p>
            If you are being pestered by recovery agents, our lawyers panel can
            put a stop to the harassment since it is in violation of RBI rules
            and Supreme Court orders.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.common_padding {
  padding-top: 7%;
}
.dm1 {
  width: 100%;
  height: auto;
}
.dm1 img {
  width: 100%;
  height: 90vh;
  object-fit: cover;
}
.dm2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dm2 h2 {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: helvetica;
  color: white;
  text-align: center;
  padding: 1%;
}
.dm2 button {
  background-color: #fd7755;
  color: white;
  font-size: 1.2rem;
  font-weight: 500;
  font-family: helvetica;
  padding: 1%;
  border: none;
  border-radius: 20px;
  margin: 1%;
  cursor: pointer;
}
.dm2 button:hover {
  background-color: transparent;
  border: 2px solid white;
}
.section_b {
  background-image: url("/media/bg.0ac90d8f.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  padding: 5% 10%;
}
.container_sec2 {
  display: flex;
  justify-content: space-between;
  gap: 2%;
}
.section_b h2 {
  text-align: center;
  color: white;
  font-size: 3rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
}
.sec2 {
  background: linear-gradient(90deg, #1d625f, #073c3c);
  width: 33%;
  padding: 1rem;
  border-radius: 20px;
  margin: 3% 0;
  opacity: 0.85;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
}
.sec2 span {
  color: white;
  font-size: 7rem;
  opacity: 1;
  padding: 0.5rem;
}
.sec2 h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.dm3 {
  width: 100%;
  height: auto;
  background-color: #d0e4e3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 3%;
}
.dm3 h2 {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: helvetica;
  color: #073c3c;
}
.dm3 h4 {
  font-size: 1.5rem;
  font-weight: 500;
  opacity: 0.8;
  font-family: helvetica;
  color: #073c3c;
}
.dm3_container {
  display: flex;
  justify-content: space-between;
  gap: 2%;
}
.dm3_con {
  background: linear-gradient(90deg, #1d625f, #073c3c);
  width: 100%;
  padding: 1rem;
  border-radius: 20px;
  margin: 3% 0;
  opacity: 0.85;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.dm3_con p {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.dm4p {
  padding: 5% 10%;
  background-color: #1b1d1d;
}
.dm4 {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dm4 h2 {
  font-size: 2.5rem;
  font-weight: 700;
  font-family: helvetica;
  color: white;
  text-align: center;
  padding: 1%;
}
.dm4_container {
  display: flex;
  justify-content: space-between;
  gap: 2%;
}
.dm4_con {
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
  width: 30%;
  padding: 1rem;
  border-radius: 20px;
  margin: 3% 0;
  opacity: 0.85;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.dm4_con img {
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
}
.dm4_con h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}
.dm4_con p {
  color: white;
  font-size: 1rem;
  font-weight: 500;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

@media screen and (max-width: 1200px){
  .common_padding{
    padding-top: 0;
  }
  .container_sec2{
    display: flex;
    flex-direction: column;
  }
  .sec2{
    width: 100%;
  }
  .dm3_container{
    display: flex;
    flex-direction: column;
  }
  .dm3_con{
    width: 100%;
  }
  .dm4_container{
    display: flex;
    flex-direction: column;
  }
  .dm4_con{
    width: 100%;
  }
}
@media screen and (max-width: 600px){
  .section_b h2{
    font-size: 2rem;
  }
  .dm3 h2{
    font-size: 2rem;
  }
}
</style>
