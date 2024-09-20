<template>
  <div class="page_container">
    <h2>Fixed Deposit Calculator</h2>
    <p class="mil-text-m mil-soft mil-mb-60 mil-up">
      This calculator helps you to estimate your returns on Fixed Deposit
    </p>

    <div class="row justify-content-between">
      <div class="col-xl-5 mil-mb-80">
        <h3 class="mil-mb-30 mil-up">Effective Returns:</h3>
        <!-- <p class="mil-text-m mil-soft mil-mb-60 mil-up">
                  Explore exciting opportunities and discover how your career
                  can flourish at Plax.
                </p> -->
        <div class="Effective_returns">
          <div>
            <p>Total Investment:</p>
            <h6 class="value">{{}}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Total Interest:</p>
            <h6 class="value">{{}}</h6>
          </div>
          <div class="v_line"></div>
          <div>
            <p>Maturity Value:</p>
            <h6 class="value">{{}}</h6>
          </div>
        </div>
        <h3 class="mil-mb-30 mil-up">Input fields:</h3>
        <div class="input_field">
          <label for="">Amount Invested</label>
          <input type="text" id="input_logo" placeholder="Enter Amount" />
        </div>
      </div>
      <div class="col-xl-6 mil-mb-80">
        <div class="mil-image-frame mil-up">
          <img
            src="/img/inner-pages/6.png"
            alt="image"
            class="mil-scale-img"
            data-value-1="1"
            data-value-2="1.2"
          />
        </div>
      </div>
    </div>
  </div>
  <br />
</template>

<style scoped>
.page_container {
  padding: 10% 1rem 0 1rem;
}
/* .justify-content-between{
    border: 1px solid red;
}
.row{
    border: 1px solid green;
}
.align-items-center{
    border: 1px solid blue;
} */
.Effective_returns {
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border: 2px solid lightgray;
}
.v_line {
  border-left: 2px solid lightgray;
  height: 60px;
  margin: 2% 0;
}
.input_field {
  margin: 1% 0;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid lightgray;
}
</style>
