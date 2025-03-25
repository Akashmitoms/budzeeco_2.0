<template>
  <pop-up v-if="togglePopup">
    <div class="pop_up" ref="popup">
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
  <header>
    <div class="head1">
      <div @click="$router.push('/')"><img src="/img/PNG Logo -1.png" /></div>
      <span @click="toggleMenu">
        <font-awesome-icon
          :icon="showMenu ? ['fas', 'xmark'] : ['fas', 'bars']"
        />
        <!-- <font-awesome-icon :icon="['fas', 'xmark']" /> -->
      </span>
    </div>
    <div class="head2" v-if="showMenu" ref="menu">
      <ul>
        <li>
          <RouterLink to="/" class="link" @click="toggleMenu"
            >MEMBERSHIP</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/masterclass" class="link" @click="toggleMenu"
            >MASTERCLASS​</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/calculator" class="link" @click="toggleMenu"
            >CALCULATORS​</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/myMentor" class="link" @click="toggleMenu"
            >MY MENTOR</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/debtManagement" class="link" @click="toggleMenu"
            >DEBT MANAGEMENT</RouterLink
          >
        </li>
        <li>
          <RouterLink to="/brand" class="link" @click="toggleMenu"
            >BRAND</RouterLink
          >
        </li>
        <li>
          <a
            href="http://nationalfinancewizardquest.budzeeco.com"
            target="_blank"
            class="link"
            @click="toggleMenu"
            >MY EVENTS</a
          >
        </li>
      </ul>
      <div class="btn_box">
        <!-- <button class="butn">Log In</button> -->
        <button class="butn" @click="open">JOIN COMMUNITY</button>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
export default {
  name: "Header",

  data() {
    return {
      showMenu: false,
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
    toggleMenu(event) {
      event.stopPropagation(); // Prevent click event from propagating to document
      this.showMenu = !this.showMenu;
      if (this.showMenu) {
        document.addEventListener("click", this.closeMenu);
      } else {
        document.removeEventListener("click", this.closeMenu);
      }
    },
    async submitForm() {
      try {
        const response = await axios.post(
          "mail/send_email_consulatation.php",
          this.formData
        );
        alert(response.data.message);
        this.resetForm(); // Reset the form after submission
        this.close(); // Close the popup after submission
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
    },
    resetForm() {
      this.formData = {
        name: "",
        phone: "",
        email: "",
        consultation: false,
        subscription: false,
        others: false,
        additionalInfo: "",
      };
    },
    open() {
      this.togglePopup = true;
      setTimeout(() => {
        document.addEventListener("click", this.clickOutside);
      }, 0);
    },
    clickOutside(event) {
      const popup = this.$refs.popup;
      if (popup && !popup.contains(event.target)) {
        this.close();
      }
    },
    close() {
      this.togglePopup = false;
      document.removeEventListener("click", this.clickOutside);
    },
    closeMenu(event) {
      const menu = this.$refs.menu;
      if (menu && !menu.contains(event.target)) {
        this.showMenu = false;
        document.removeEventListener("click", this.closeMenu);
      }
    },
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenu);
  },
};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  list-style: none;
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
  z-index: 10;
}
.head1 {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: white;
  padding: 0 10%;
  cursor: pointer;
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
}
.head1 img {
  width: 90px;
  margin: 5% 0;
}
.head1 span {
  font-size: 300%;
  color: white;
  cursor: pointer;
  padding: 10px 0;
}
.head2 {
  width: 70%;
  margin: auto;
  list-style: none;
  box-shadow: 2px 2px 2px lightgray, -2px 2px 2px lightgray;
  padding: 2% 0;
}
.head2 ul li {
  list-style: none;
  position: relative;
  margin: 10px 0;
}
.head2 ul li:hover {
  background-color: #123931;
  cursor: pointer;
  .link {
    color: white;
  }
}

.link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 400;
  font-family: dm-sans;
}
.arrow {
  position: absolute;
  right: 20px;
}
.btn_box {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
}
.btn_box button {
  background-color: #ff8060;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 700;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
}
</style>
