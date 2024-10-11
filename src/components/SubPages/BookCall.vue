<template>
  <div class="call">
    <h1>Personal Consultant</h1>
    <div class="call_style">
      <div class="line"></div>
      <div><H2>BUDZEECO</H2></div>
      <div class="line"></div>
    </div>
    <div class="con"><img src="/img/budzee/callback1.png" alt="" /></div>
    <h2>Financial Planning is easy with Budzeeco</h2>
    <p>
      Get access to Financial Planners who curate a tailored goal-based
      investment strategy just for you.
    </p>
    <button v-if="currentStep === 0" @click="nextStep" class="btn_a">Start</button><br />
    
    <section v-if="currentStep > 0">
      <div class="input" v-if="currentStep === 1">
        <label for="name">Name</label> <br />
        <input type="text" v-model="formData.name" placeholder="Enter Your Name" /><br />
        <button @click="nextStep">OK</button>
      </div>

      <div class="input" v-if="currentStep === 2">
        <label for="phone">Phone Number</label> <br />
        <input type="text" v-model="formData.phone" placeholder="Enter Your Phone Number" /><br />
        <button @click="nextStep">OK</button>
      </div>

      <div class="input" v-if="currentStep === 3">
        <label for="age">Age</label> <br />
        <input type="text" v-model="formData.age" placeholder="Enter Your Age" /><br />
        <button @click="nextStep">OK</button>
      </div>

      <div class="input" v-if="currentStep === 4">
        <label for="city">City</label> <br />
        <input type="text" v-model="formData.city" placeholder="Enter Your City" /><br />
        <button @click="nextStep">OK</button>
      </div>

      <div class="input" v-if="currentStep === 5">
        <label for="occupation">Occupation</label> <br />
        <input type="text" v-model="formData.occupation" placeholder="Enter Your Occupation" /><br />
        <button @click="nextStep">OK</button>
      </div>

      <div class="input" v-if="currentStep === 6">
        <label for="industry">Industry</label> <br />
        <input type="text" v-model="formData.industry" placeholder="Enter Your Industry" /><br />
        <button @click="nextStep">OK</button>
      </div>

      <div class="input" v-if="currentStep === 7">
        <label for="income">Income Bracket</label> <br />
        <input type="text" v-model="formData.income" placeholder="Enter Your Income" /><br />
        <button @click="submitForm">Submit</button>
      </div>
    </section>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  data() {
    return {
      currentStep: 0, // Start with the first step (Start button)
      formData: {
        name: "",
        phone: "",
        age: "",
        city: "",
        occupation: "",
        industry: "",
        income: ""
      }
    };
  },
  methods: {
    nextStep() {
      this.currentStep++; // Move to the next step
    },
    async submitForm() {
      try {
        const response = await axios.post("mail/send_email_book_a_call.php", this.formData);
        alert(response.data.message);
        this.resetForm(); // Reset form and go back to start
      } catch (error) {
        console.error(error);
        alert("An error occurred. Please try again.");
      }
    },
    resetForm() {
      this.currentStep = 0; // Go back to the start step
      this.formData = {
        name: "",
        phone: "",
        age: "",
        city: "",
        occupation: "",
        industry: "",
        income: ""
      };
    }
  }
};
</script>

<style scoped>
.call_style {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.line {
  width: 10%;
  height: 2px;
  background-color: white;
  margin: 1rem;
}
.con {
  width: 200px;
  margin: 0 auto;
}
.con img {
  width: 100%;
}
.call {
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
  text-align: center;
  padding: 7% 5%;
}
.call h1 {
  font-size: 50px;
  color: white;
  margin: 0;
  padding: 1rem;
}
.call h2 {
  font-family: dm sans;
  line-height: 25px;
  font-size: 25px;
  color: white;
  margin: 0;
  padding: 1rem;
  letter-spacing: 1px;
}
.call p {
  font-size: 20px;
  color: white;
  margin: 0;
  padding: 1rem;
}
section {
  width: 100%;
}
.input {
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin: 10px auto;
  text-align: left;

}
.input label {
  font-size: 25px;
  line-height: 10px;
  width: 100%;
  color: white;
  padding: 5px;
}
.input input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  background-color: transparent;
  border-bottom: 2px solid white;
  color: white;
  font-size: 18px;
}
input:focus{
    outline: none;
}
.input input::placeholder {
  color: white;
}
.input button {
  font-size: 15px;
  padding: 10px 20px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 5%;
  cursor: pointer;
}
.btn_a {
    background-color: #f5f2f0;
    padding: 15px 45px;
    margin: 20px;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 10px;
  }
  .btn_a:hover {
    background-color: white;
    border: 1px solid black;
  }
</style>