<template>
  <footer>
    <div class="fooetr_sec">
      <img src="/img/PNG Logo -1.png" alt="" />
      <p>
        Budzeeco is designed to be your ultimate partner in managing personal
        finances and investment through educational courses. We offer an all
        encompassing range of education content that cater to every aspect of
        your financial journey, ensuring that you have the tools and support
        needed to make informed decisions and achieve your financial goals.
      </p>
    </div>
    <div class="fooetr_sec">
      <h2>Quick Links</h2>
      <ul>
        <li>
          <RouterLink to="/"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            HOME</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/masterClass"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            MASTERCLASS</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/calculator"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            CALCULATOR</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/myMentor"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            MY MENTOR</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/brand"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            BRAND</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/privacyPolicy"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            Privacy Policy</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/refundPolicy"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            Refund Policy</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/termsAndConditions"
            ><span><font-awesome-icon :icon="['fas', 'angles-right']" /></span>
            Terms & Conditions</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="fooetr_sec">
      <h2>Contact Us</h2>
      <ul>
        <li>
          <span class="con_detail"
            ><font-awesome-icon :icon="['fas', 'phone-volume']"
          /></span>
          +91-8977020524
        </li>
        <li>
          <span class="con_detail"
            ><font-awesome-icon :icon="['fas', 'envelope']"
          /></span>
          connect@budzeeco.com
        </li>
        <li>
          <span class="con_detail"
            ><font-awesome-icon :icon="['fas', 'map-location-dot']"
          /></span>
          Hyderabad & Bangalore
        </li>
      </ul>
      <h5>Follow Us On:</h5>
      <span class="social_media">
        <span
          ><a href="https://www.facebook.com/share/1ABpqMcqVS/" target="_blank"
            ><font-awesome-icon :icon="['fab', 'facebook']" /></a
        ></span>
        <span
          ><a href="https://www.linkedin.com/company/budzeeco/" target="_blank"
            ><font-awesome-icon :icon="['fab', 'linkedin']" /></a
        ></span>
        <span
          ><a
            href="https://www.instagram.com/mybudzeeco?igsh=ZzJ4OTNrY3Q5cWdk"
            target="_blank"
            ><font-awesome-icon :icon="['fab', 'instagram']" /></a
        ></span>
        <!-- <span
          ><a href=""><font-awesome-icon :icon="['fab', 'youtube']" /></a
        ></span> -->
      </span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  background-color: #0d5152;
  color: #a0cdcd;
  padding: 3% 7%;
}
.fooetr_sec {
  width: 33.33%;
  padding: 0 3%;
}
.fooetr_sec img {
  width: 23%;
  margin-bottom: 2%;
}
.fooetr_sec h2 {
  text-align: left;
  text-decoration: underline;
  margin: 2% 0 5% 0;
  font-family: helvetica;
  font-weight: 700;
  font-size: 1.5rem;
  margin-left: 5%;
}
.fooetr_sec p {
  font-family: helvetica;
  margin-top: 1%;
  text-align: justify;
}
.fooetr_sec ul {
  margin-top: 2rem;
}
.fooetr_sec ul li {
  list-style: none;
}
.fooetr_sec ul li a {
  text-decoration: none;
  color: #a0cdcd;
}
.fooetr_sec ul li:hover {
  cursor: pointer;
  font-weight: bold;
}
.fooetr_sec ul li span {
  margin-right: 0.5rem;
}
.con_detail {
  font-size: 1.2rem;
}
.fooetr_sec h5 {
  font-size: 1.2rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  text-align: left;
  text-decoration: underline;
  margin-left: 6%;
}
.social_media {
  display: flex;
  justify-content: start;
  gap: 10%;
  margin-bottom: 5%;
  margin-left: 2rem;
}
.social_media span {
  font-size: 1.5rem;
  cursor: pointer;
}
.social_media span a {
  color: #a0cdcd;
}
.social_media span:hover {
  color: #fff;
  scale: 1.2;
}
@media (max-width: 768px) {
  footer {
    flex-direction: column;
  }
  .fooetr_sec {
    width: 100%;
    margin-bottom: 2rem;
  }
}
</style>
