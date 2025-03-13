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
          cols="20"
          rows="1"
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

  <div class="artical" ref="artical">
    <div id="smooth-wrapper" class="mil-wrapper">
      <div id="smooth-content">
        <div class="mil-banner mil-dark-1">
          <div class="mil-radial-g-1"></div>
          <div class="container">
            <div class="row align-items-center">
              <div class="col-xl-6">
                <div class="mil-banner-text">
                  <br />
                  <h2 class="mil-display mil-text-gradient mil-mb-60">
                    SIMPLIFYING PERSONAL FINANCE & HELPING PEOPLE ACHIEVE
                    FINANCIAL FREEDOM
                  </h2>
                  <div class="mil-buttons-frame" @click="open">
                    <a class="mil-btn mil-md mil-add-arrow">JOIN COMMUNITY​</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="mil-banner-img mil-120">
                  <img
                    src="\img\budzee\hom1.png"
                    alt="banner"
                    style="
                      max-width: 105%;
                      border-radius: 20px;
                      margin-top: 1rem;
                    "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="gurukul" class="icon-boxes mil-p-160-130">
          <div class="container">
            <div class="mil-text-center">
              <h2 class="mil-light mil-mb-30 mil-up zoomOut">GURUKUL</h2>
              <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut">
                Experience the bootcamp training by accessing the <br />finance
                and other modules by top creators​
              </p>
            </div>
            <div class="row align-items-center">
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
                >
                  <img
                    src="/img/home-4/icons/1.svg"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Financial Modules
                  </h5>
                  <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    Here are some of the best interactive online platforms to
                    learn personal finance, stock market, and more
                  </p>
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
                >
                  <img
                    src="/img/home-4/icons/2.svg"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Gamified Modules
                  </h5>
                  <br />
                  <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    A Gamified Learning Experience, to help you learn better.
                  </p>
                  <br /><br />
                </div>
              </div>
              <div class="col-xl-4 mil-mb-30">
                <div
                  class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
                >
                  <img
                    src="/img/home-4/icons/3.svg"
                    alt="icon"
                    class="mil-mb-30 mil-up zoomOut"
                  />
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Community Bootcamps
                  </h5>
                  <p class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                    Learning is never alone, learn with a community resulting in
                    a stellar completion rate of 100%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="oneStopSolution" class="mil-features mil-p-0-80">
          <div class="container">
            <div
              class="row flex-sm-row-reverse justify-content-between align-items-center"
            >
              <div class="col-xl-6 mil-mb-80">
                <h2 class="mil-mb-30 mil-light mil-up zoomOut">
                  One Stop Solution
                </h2>
                <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut">
                  A one stop Solution for all your financial problems and
                  helping you implement all your learnings right from saving to
                  investing.
                </p>
                <div class="icon_stamp zoomOut">
                  <div class="icon_stamp_con">
                    <img src="/img/budzee/sld1.png" alt="" />
                    <p>Savings</p>
                  </div>
                  <div class="icon_stamp_con">
                    <img src="/img/budzee/sld2.png" alt="" />
                    <p>Insurance</p>
                  </div>
                  <div class="icon_stamp_con">
                    <img src="/img/budzee/sid13.png" alt="" />
                    <p>Mutual Funds</p>
                  </div>
                </div>
                <div class="icon_stamp zoomOut">
                  <div class="icon_stamp_con">
                    <img src="/img/budzee/sid11.png" alt="" />
                    <p>Tax</p>
                  </div>
                  <div class="icon_stamp_con">
                    <img src="/img/budzee/sid12.png" alt="" />
                    <p>Loans</p>
                  </div>
                </div>
                <div class="mil-up"></div>
              </div>
              <div class="col-xl-5 mil-mb-80">
                <div class="mil-image-frame mil-visible-overflow zoomOut">
                  <img src="/img/budzee/stop div.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mil-features mil-p-0-80">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-xl-6 mil-mb-80">
                <h2 class="mil-mb-30 mil-light mil-up zoomOut">
                  Smart, simple financial planner.
                </h2>
                <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut">
                  Whether you’re looking to plan for retirement, save for your
                  child’s education, or invest in your future, we have the
                  expertise and tools to help you succeed.
                </p>
              </div>
              <div class="col-xl-5 mil-mb-80">
                <div class="mil-image-frame mil-visible-overflow image zoomOut">
                  <img
                    src="/img/budzee/Screenshot c2-fotor-20241011213055.png"
                    alt=""
                  />
                  <img
                    src="/img/budzee/Screenshot c3-fotor-2024101121340.png"
                    alt=""
                    width="70%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="eventsWorkshops" class="mil-cta mil-up">
          <div class="container">
            <div class="mil-out-frame mil-image mil-p-160-160">
              <div
                class="row flex-sm-row-reverse justify-content-between align-items-center"
              >
                <div class="col-xl-6">
                  <h2 class="mil-light mil-mb-30 mil-up zoomOut">
                    Events And Workshops
                  </h2>
                  <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut">
                    Grow your network with exceptional individuals and have fun
                    with finance and careers at our pan India meet-ups
                  </p>
                  <img
                    src="/img/budzee/Blank 2 Grids Collage.png"
                    width="90%"
                    class="zoomOut"
                    alt=""
                  />
                </div>
                <div class="col-xl-5">
                  <div class="mil-image-frame mil-visible-overflow zoomOut">
                    <img
                      src="/img/budzee/Four Rectangle Collage Blank.png"
                      width="100%"
                      alt="image"
                      class="mil-up"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mil-blog-list mil-p-160-130">
          <div class="container">
            <div class="mil-text-center">
              <h2 class="mil-light mil-mb-30 mil-up zoomOut">
                Our Community members <br />
                workplace​
              </h2>
            </div>
            <div class="workplace">
              <div class="workplace_con zoomOut">
                <img
                  src="\img\budzee\icons8-amazon-144 p.png"
                  alt=""
                  style="background-color: white"
                />
                <img src="/img/budzee/icons8-google-144.png" alt="" />
                <img src="/img/budzee/icons8-walmart-app-200.png" alt="" />
                <img src="\img\budzee\zomato-fotor.png" alt="" />
              </div>
            </div>
            <div class="workplace">
              <div class="workplace_con zoomOut">
                <img src="\img\budzee\Logo-Final-avanika.png" alt="" />
                <img src="\img\budzee\L04.png" alt="" />
                <img src="\img\budzee\icons8-msx-logo-128.png" alt="" />
                <img src="\img\budzee\dxc.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div class="mil-cta mil-p-0-160 mil-up">
          <div class="container">
            <div class="mil-out-frame mil-bg-1">
              <div
                class="row justify-content-center align-items-center mil-p-160-160"
              >
                <div class="col-xl-7 mil-text-center">
                  <h2 class="mil-mb-30 mil-up zoomOut">
                    Your financial peace of mind is our Total priority
                  </h2>
                  <p class="mil-text-m mil-soft mil-mb-60 mil-up zoomOut">
                    At Budzeeco, we understand the importance of the security
                    <br />and privacy of your financial data.
                  </p>
                  <div class="mil-up zoomOut">
                    <a class="mil-btn mil-md mil-add-arrow" @click="open"
                      >Join Now</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="mil-testimonials mil-p-0-160">
          <div class="container">
            <div class="swiper swiper-container mil-testimonials-2 mil-up">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <blockquote class="mil-with-bg mil-dark">
                    <svg
                      width="50"
                      height="32"
                      viewBox="0 0 50 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mil-mb-30 mil-up mil-accent"
                    >
                      <path
                        d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                        fill="#03A6A6"
                      ></path>
                      <path
                        d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                        fill="#03A6A6"
                      ></path>
                    </svg>
                    <p class="mil-text-l mil-light mil-mb-30 mil-up">
                      Managing savings has never been so easy. Budzeeco has helped
                      me achieve my financial goals faster than I imagined.
                    </p>
                    <div class="mil-customer">
                      <img
                        src="/img/faces/1.jpg"
                        alt="Customer"
                        class="mil-up"
                      />
                      <h6 class="mil-light mil-up">Rüdiger Karlsen</h6>
                    </div>
                  </blockquote>
                </div>
                <div class="swiper-slide">
                  <blockquote class="mil-with-bg mil-dark">
                    <svg
                      width="50"
                      height="32"
                      viewBox="0 0 50 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mil-mb-30 mil-up mil-accent"
                    >
                      <path
                        d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                        fill="#03A6A6"
                      ></path>
                      <path
                        d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                        fill="#03A6A6"
                      ></path>
                    </svg>
                    <p class="mil-text-l mil-light mil-mb-30 mil-up">
                      Budzeeco&#x27;s security is unparalleled. I feel comfortable
                      knowing that my data is protected while I control my
                      finances.
                    </p>
                    <div class="mil-customer">
                      <img
                        src="/img/faces/2.jpg"
                        alt="Customer"
                        class="mil-up"
                      />
                      <h6 class="mil-light mil-up">Branka Berg</h6>
                    </div>
                  </blockquote>
                </div>
                <div class="swiper-slide">
                  <blockquote class="mil-with-bg mil-dark">
                    <svg
                      width="50"
                      height="32"
                      viewBox="0 0 50 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mil-mb-30 mil-up mil-accent"
                    >
                      <path
                        d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                        fill="#03A6A6"
                      ></path>
                      <path
                        d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                        fill="#03A6A6"
                      ></path>
                    </svg>
                    <p class="mil-text-l mil-light mil-mb-30 mil-up">
                      Budzeeco adapts to my needs. I can customize my plan and I
                      really feel like I am in control who formed us in his own
                      image.
                    </p>
                    <div class="mil-customer">
                      <img
                        src="/img/faces/3.jpg"
                        alt="Customer"
                        class="mil-up"
                      />
                      <h6 class="mil-light mil-up">Karl Andreassen</h6>
                    </div>
                  </blockquote>
                </div>
                <div class="swiper-slide">
                  <blockquote class="mil-with-bg mil-dark">
                    <svg
                      width="50"
                      height="32"
                      viewBox="0 0 50 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="mil-mb-30 mil-up mil-accent"
                    >
                      <path
                        d="M13.0425 9.59881C13.734 7.27646 15.0099 5.16456 16.7515 3.45982C17.0962 3.11455 17.2958 2.65336 17.31 2.16891C17.3243 1.68445 17.1523 1.2126 16.8285 0.848135L16.6225 0.619235C16.3552 0.313531 15.9908 0.106228 15.5887 0.0311485C15.1866 -0.0439312 14.7706 0.0176452 14.4085 0.205827C-0.299477 8.01918 -0.116489 18.6169 0.0295105 20.4165C0.0195105 20.6139 -0.000488281 20.8112 -0.000488281 21.0085C0.0518962 23.1543 0.724816 25.2405 1.93898 27.0214C3.15314 28.8023 4.85796 30.2037 6.85252 31.0604C8.84709 31.9171 11.0483 32.1935 13.1967 31.8569C15.3452 31.5203 17.3514 30.5848 18.9788 29.1606C20.6063 27.7364 21.7873 25.8829 22.3826 23.8185C22.9779 21.7541 22.9627 19.5648 22.3389 17.5086C21.715 15.4524 20.5085 13.615 18.8614 12.2129C17.2144 10.8108 15.1954 9.90246 13.0425 9.59487V9.59881Z"
                        fill="#03A6A6"
                      ></path>
                      <path
                        d="M40.2255 9.59881C40.9171 7.27648 42.193 5.16459 43.9345 3.45982C44.2793 3.11455 44.4788 2.65336 44.4931 2.16891C44.5074 1.68445 44.3353 1.2126 44.0115 0.848135L43.8055 0.619235C43.5382 0.313531 43.1738 0.106228 42.7717 0.0311485C42.3696 -0.0439312 41.9536 0.0176452 41.5915 0.205827C26.8835 8.01918 27.0665 18.6169 27.2115 20.4165C27.2015 20.6139 27.1815 20.8112 27.1815 21.0085C27.2332 23.1544 27.9055 25.241 29.1191 27.0224C30.3328 28.8038 32.0373 30.2057 34.0318 31.063C36.0262 31.9203 38.2274 32.1972 40.3761 31.8611C42.5248 31.525 44.5313 30.5899 46.1591 29.166C47.787 27.742 48.9684 25.8887 49.5641 23.8242C50.1599 21.7598 50.1451 19.5704 49.5215 17.514C48.8979 15.4576 47.6915 13.6199 46.0445 12.2176C44.3975 10.8152 42.3785 9.90659 40.2255 9.59881Z"
                        fill="#03A6A6"
                      ></path>
                    </svg>
                    <p class="mil-text-l mil-light mil-mb-30 mil-up">
                      Budzeeco&#x27;s security is unparalleled. I feel comfortable
                      knowing that my data is protected while I control my
                      finances.
                    </p>
                    <div class="mil-customer">
                      <img
                        src="/img/faces/2.jpg"
                        alt="Customer"
                        class="mil-up"
                      />
                      <h6 class="mil-light mil-up">Bett Nilsen</h6>
                    </div>
                  </blockquote>
                </div>
              </div>
            </div>
            <div class="mil-testi-pagination mil-up"></div>
          </div>
        </div> -->
        <div class="mil-cta mil-up">
          <div class="container">
            <div class="mil-out-frame mil-image-2 mil-bg-2">
              <div
                class="row justify-content-center align-items-center mil-p-160-0"
              >
                <div class="col-xl-7 mil-text-center">
                  <h2 class="mil-light mil-mb-30 mil-up zoomOut">
                    Transform your Financial Future with Budzeeco!
                  </h2>
                  <p class="mil-text-l mil-light mil-mb-60 mil-up zoomOut">
                    With our intuitive and personalized tools, achieving your
                    financial goals and financial freedom is within your reach.
                    Invest in your financial success today with BUDZEECO​!&quot;
                  </p>
                  <div class="mil-up mil-mb-80">
                    <a
                      class="mil-btn mil-md mil-add-arrow zoomOut"
                      @click="open"
                      >JOIN COMMUNITY​</a
                    >
                  </div>
                </div>
                <div
                  class="mil-illustration-absolute mil-type-3 mil-up zoomOut"
                >
                  <img src="/img/home-4/5.png" alt="illustration" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mil-faq mil-p-160-130">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-xl-8">
                <div class="mil-text-center">
                  <h2 class="mil-light mil-mb-30 mil-up zoomOut">
                    Explore Our Frequently <br />Asked Questions
                  </h2>
                  <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut">
                    Find quick and clear answers to the most common
                    <br />questions about Budzeeco
                  </p>
                </div>
                <section class="section4">
                  <div v-for="faq in pcFaq" :key="faq.id">
                    <div
                      @click="toggleFaq(faq)"
                      class="mil-text-l mil-dark-soft mil-mb-60 mil-up zoomOut"
                    >
                      <h3 class="faq_head">{{ faq.question }}</h3>
                      <p v-if="faq.open">{{ faq.answer }}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bsl-popup" data-theme="plax" data-category="react">
      <div class="bsl-popup__buttons"></div>
      <div class="bsl-popup__content bsl-popup__content-related">
        <div class="bsl-popup__menu"></div>
      </div>
      <div class="bsl-popup__content bsl-popup__content-help"></div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "TheHome",

  data() {
    return {
      pcFaq: [
        {
          id: 1,
          question: "Who needs financial planning?",
          answer:
            "Well, pretty much everyone! It doesn't matter how much you earn or how old you are. Financial planning helps you reach your goals, manage your spending, save money, and deal with unexpected financial blocks. Whether you're saving for retirement, paying for school, or just trying to make sure you're covered for the future, financial planning can give you a roadmap to follow.",
          open: false,
        },
        {
          id: 2,
          question: "Why is financial planning important?",
          answer:
            "Financial planning is important because it keeps your money goals in check. By keeping an eye on what you earn, spend, save, and invest, you ensure stability and security for you and your crew. Creating a roadmap for your finances, helping you navigate through life's ups and downs while working towards a prosperous future. Without a solid plan, you might end up struggling to make ends meet or may miss out on big milestones like buying a home, starting a business, or chilling out in retirement. So, by taking the time to plan your finances wisely, you can build a solid foundation for your financial well-being and achieve the things you want in life.",
          open: false,
        },
        // {
        //   id: 3,
        //   question: "How much do I have to pay for RIA service?",
        //   answer:
        //     "According to SEBI rules, Registered Investment Advisors (RIAs) can't earn commissions or brokerage fees from investment products. Instead, they charge advisory fees for their services. These fees usually vary based on your income or family situation. This setup ensures you get personalized financial advice without any hidden agendas or conflicts of interest.",
        //   open: false,
        // },
        {
          id: 4,
          question: "Is the family included in the financial plan?",
          answer:
            "Financial planning can encompass individuals or entire families. Those with spouses and children should ideally include the entire family's income and assets in the plan. This inclusive approach ensures that everyone is aligned with common goals, fostering better coordination and financial stability for the entire household.",
          open: false,
        },
        {
          id: 5,
          question: "How frequently do I get updates on my plan?",
          answer:
            "Your financial advisor serves as your one-stop solution. We believe in fostering two-way relationships. Your financial planner will proactively reach out to you on a monthly or quarterly basis to provide updates on your plan. However, if you need to connect between these scheduled updates, you can always schedule a meeting at your convenience.",
          open: false,
        },
      ],
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
    close() {
      this.togglePopup = false;
    },
    open() {
      this.togglePopup = true;
    },
    toggleFaq(faq) {
      console.log("faq", faq);
      this.pcFaq.forEach((f) => {
        if (f.id == faq.id) {
          f.open = !f.open;
        } else {
          f.open = false;
        }
      });
    },
    animaFunction() {
      const zoomOutElements = this.$refs.artical.querySelectorAll(".zoomOut");
      zoomOutElements.forEach((zoomOut) => {
        gsap.from(zoomOut, {
          scale: 0,
          duration: 1,
          y: 50,
          scrollTrigger: {
            trigger: zoomOut,
            start: "top 95%",
            end: "top 81%",
            scrub: 1,
            markers: false,
          },
        });
      });
    },
  },

  mounted() {
    gsap.registerPlugin(ScrollTrigger);
    this.animaFunction();
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

.faq_head {
  color: white;
}

.image {
  display: flex;
  gap: 10px;
}
.image img {
  width: 100%;
}
.mil-mb-20 h2 {
  font-size: 3.5rem;
  background-color: white;
}
.mil-text-l {
  font-size: 1.2rem;
}
.mil-p-160-130 {
  background: linear-gradient(90deg, #192626, #1b1d1d);
}
.mil-p-0-80 {
  background: linear-gradient(90deg, #192626, #1b1d1d);
}
.mil-center:hover {
  box-shadow: 5px 5px 15px rgba(255, 255, 255, 0.5);
}
.icon_stamp {
  display: flex;
  margin-bottom: 3%;
  gap: 15px;
}
.icon_stamp_con {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  width: 33%;
  background-color: #214f51;
  border-radius: 20px;
  padding: 10px;
  /* border: 1px solid white; */
}
.icon_stamp_con p {
  color: white;
}
.icon_stamp_con img {
  width: 100%;
  height: 100%;
}
.mil-cta {
  background: linear-gradient(90deg, #192626, #1b1d1d);
}
.workplace_con {
  margin-top: 15%;
  display: flex;
  justify-content: space-evenly;

  gap: 20px;
}
.workplace_con img {
  width: 15%;
  border: 5px solid #214f51;
  border-radius: 20px;
}
.mil-wrapper {
  background: linear-gradient(90deg, #192626, #1b1d1d);
}
/* mil-icon-box mil-with-bg mil-dark mil-center mil-up */
/* .mil-center{
  height: 65vh;
} */
.mil-icon-box h5 {
  font-size: 1.6rem;
}
.mil-icon-box img {
  width: 30%;
}
@media screen and (max-width: 1200px) {
  .mil-center {
    height: auto;
  }
}

@media screen and (max-width: 450px) {
  .mil-banner {
    margin-top: 0;
    padding-top: 0;
  }
  .image img {
    width: 50%;
  }
}
</style>
