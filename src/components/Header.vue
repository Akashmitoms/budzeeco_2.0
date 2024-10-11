<template>
  <header class="header_box">
    <div class="mil-top-panel mil-dark-2">
      <div class="container">
        <RouterLink to="/" class="mil-logo"
          ><img src="/img/PNG Logo -1.png" alt="Plax" width="90"
        /></RouterLink>
        <nav class="mil-top-menu">
          <ul>
            <li  @click="toggleDropDown">
              <RouterLink to="/"
                >MEMBERSHIP
                <span class="arrow_down"
                  ><font-awesome-icon :icon="['fas', 'angle-down']" /></span
                >​</RouterLink
              >
              <div class="drop_down" v-if="dropDown">
               <h3>GURUKUL</h3>
                <h3>One Stop Solution</h3>
                <h3>Events & Workshops</h3>
              </div>
            </li>
            <li class="">
              <RouterLink to="/masterClass">MASTERCLASS ​</RouterLink>
            </li>
            <li class="">
              <RouterLink to="/calculator">CALCULATORS​</RouterLink>
            </li>
            <li class=""><RouterLink to="/myMentor">MY MENTOR</RouterLink></li>
            <li class=""><RouterLink to="/brand">BRAND</RouterLink></li>
          </ul>
        </nav>
        <div class="mil-menu-buttons">
          <a class="mil-btn mil-sm" href="register.html">Log in</a>

          <!-- <div class="mil-menu-btn"><span></span></div> -->
          <a
            class="mil-btn mil-sm"
            style="margin-left: 10px"
            href="register.html"
            >JOIN COMMUNITY</a
          >
        </div>
        <div class="mil-menu-buttons"></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header",

    data() {
      return {
        dropDown: false,
      };
    },

    methods: {
      toggleDropDown() {
        this.dropDown = !this.dropDown;
      },
    },
  };
</script>

<style scoped>
@import "../assets/style1.css";
@import "../assets/style2.css";
@import "../assets/style3.css";

.mil-top-panel {
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
}
.arrow_down {
  color: white !important;
}
/* .header_box{
  position: relative;
} */
.drop_down {
  z-index: 1000;
  position: absolute;
  color: white;
  background-color: #1D5F5D;
  top: 90%;
  left: 0;
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
}
h3 {
  color: white;
  font-size: 1rem;
  font-weight: 300;
  white-space: nowrap;
  margin: 5px 0;
}
</style>
