<template>
  <pop-up v-if="togglePopup">
    <div class="pop_up">
      <div class="close" @click="close">
        <font-awesome-icon :icon="['fas', 'xmark']" />
      </div>
      <h2>Contact details</h2>
      <div class="input_pop">
        <input
          v-model="formData.name"
          type="text"
          placeholder="Your Name"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Your Name'"
        />

        <input
          v-model="formData.phone"
          type="text"
          placeholder="Phone Number"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Phone Number'"
        />

        <input
          v-model="formData.email"
          type="email"
          placeholder="Email Address"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Email Address'"
        />
      </div>
      <!-- <h2>How can we help?</h2>
      <div class="input_pop1">
        <input type="checkbox" v-model="formData.consultation" />
        <label for="">Consultation</label> <br />
        <input type="checkbox" v-model="formData.subscription" />
        <label for="">Subscription</label>
      </div>
      <div class="input_pop1">
        <input type="checkbox" v-model="formData.others" />
        <label for="">Others</label>
      </div> -->
      <h2>Additional information (optional)</h2>
      <div class="textarea_pop">
        <textarea
          v-model="formData.additionalInfo"
          name=""
          id=""
          cols="30"
          rows="5"
          placeholder="Anything else you would like us to know?"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'Anything else you would like us to know?'"
        />
      </div>
      <button
        class="input_btn"
        :class="{ loading: isSubmitting }"
        @click="submitForm"
      >
        Submit Request
        <span v-if="isSubmitting" class="loader"></span>
      </button>
    </div>
  </pop-up>
  <header class="header_box">
    <div class="mil-top-panel mil-dark-2">
      <div class="container">
        <RouterLink to="/" class="mil-logo"
          ><img src="/img/PNG Logo -1.png" alt="Plax" width="90"
        /></RouterLink>
        <nav class="mil-top-menu">
          <ul>
            <li @click="toggleDropDown" class="mil-has-children">
              <RouterLink to="/">MEMBERSHIP ​</RouterLink>
              <div class="drop_down" v-if="dropDown">
                <h3 @click="scrollToSection('gurukul')">GURUKUL</h3>
                <h3 @click="scrollToSectionTop('oneStopSolution')">
                  One Stop Solution
                </h3>
                <h3 @click="scrollToSection('eventsWorkshops')">
                  Events & Workshops
                </h3>
                <h3 @click="$router.push('/calculator')">Calculator</h3>
                <h3 @click="$router.push('/debtManagement')">
                  Debt Management
                </h3>
              </div>
            </li>
            <li @click="dropDown = false">
              <RouterLink to="/masterClass">MASTERCLASS ​</RouterLink>
            </li>
            <!-- <li @click="dropDown = false">
              <RouterLink to="/calculator">CALCULATORS​</RouterLink>
            </li> -->
            <li @click="dropDown = false">
              <RouterLink to="/myMentor">MY MENTOR</RouterLink>
            </li>
            <li @click="dropDown = false">
              <RouterLink to="/brand">BRAND</RouterLink>
            </li>
            <li @click="dropDown = false">
              <a
                href="http://nationalfinancewizardquest.budzeeco.com"
                target="_blank"
                >MY EVENTS</a
              >
            </li>
          </ul>
        </nav>
        <div class="mil-menu-buttons">
          <a class="mil-btn mil-sm" href="register.html">Log in</a>

          <!-- <div class="mil-menu-btn"><span></span></div> -->
          <button
            class="mil-btn mil-sm"
            style="margin-left: 10px"
            @click="open"
          >
            JOIN COMMUNITY
          </button>
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
      togglePopup: false,
      formData: {
        name: "",
        phone: "",
        email: "",
        consultation: false,
        subscription: false,
        others: false,
        additionalInfo: "",
      },
    };
  },

  methods: {
    toggleDropDown() {
      this.dropDown = !this.dropDown;
    },
    close() {
      this.togglePopup = false;
    },
    open() {
      this.togglePopup = true;
    },
    scrollToSection(sectionId) {
      // Scroll to the section
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
    scrollToSectionTop(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        // Get the section's position relative to the top of the page
        const sectionTop = section.offsetTop;

        // Scroll to the section with a 100px offset
        window.scrollTo({
          top: sectionTop - 150, // Adjusting the scroll position to include 100px margin
          behavior: "smooth", // Smooth scroll
        });
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/style1.css";
@import "../assets/style2.css";
@import "../assets/style3.css";

.pop_up {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 500px; /* Limits the popup width */
  padding: 20px;
  padding-top: 60px; /* Adjusted to create space for the close button */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%);
  z-index: 1001; /* Ensure it’s above other elements */
  overflow-y: auto; /* Ensure the content is scrollable if it exceeds the height */
  max-height: 80vh; /* Prevents the popup from becoming too tall */
}
.pop_up h2 {
  color: #052e26;
  font-size: 1.5rem;
  margin: 10px 0;
}
.close {
  position: absolute;
  top: 10px; /* Position it at the top of the popup */
  right: 20px; /* Adjust this value to position it correctly within the popup */
  cursor: pointer;
  font-size: 20px;
  color: #052e26;
  z-index: 1002; /* Ensure it’s above the popup content */
}
.input_pop input {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border: 1px solid gray;
  background-color: transparent;
}

.input_pop input::placeholder {
  color: #052e26;
  opacity: 1;
}

.input_pop input:focus {
  border: 2px solid black;
  outline: none;
}

.input_pop1 input {
  display: inline;
  margin: 10px 5px 10px 10px;
}
.textarea_pop textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border: 1px solid gray;
  background-color: transparent;
}

.textarea_pop ::placeholder {
  color: black;
  opacity: 1;
}

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
  background-color: #1d5f5d;
  top: 90%;
  left: 0;
  padding: 0.5rem;
  border-radius: 0 0 10px 10px;
}
h3 {
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  white-space: nowrap;
  margin: 7px 0;
  cursor: pointer;
  font-family: Helvetica;
  opacity: 0.8;
}
h3:hover {
  opacity: 1;
}
</style>
