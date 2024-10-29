<template>
  <div class="icon-boxes mil-p-160-130">
    <div class="container">
      <div class="mil-text-center">
        <h2 class="mil-light mil-mb-30 mil-up">Financial Planning Tools</h2>
        <p class="mil-text-l mil-dark-soft mil-mb-60 mil-up">
          Financial tools to help you manage finances <br />
          ranging from FD calculator to SSY.
        </p>
      </div>
      <div class="row align-items-center">
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/fdCalculator')"
          >
            <span class="icon1 zoomOut">
              <svg
                xmlns="
http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                aria-hidden="true"
                focusable="false"
                class="svg-inline--fa fa-piggy-bank"
                role="img"
              >
                <path
                  fill="white"
                  d="M400 96l0 .7c-5.3-.4-10.6-.7-16-.7L256 96c-16.5 0-32.5 2.1-47.8 6c-.1-2-.2-4-.2-6c0-53 43-96 96-96s96 43 96 96zm-16 32c3.5 0 7 .1 10.4 .3c4.2 .3 8.4 .7 12.6 1.3C424.6 109.1 450.8 96 480 96l11.5 0c10.4 0 18 9.8 15.5 19.9l-13.8 55.2c15.8 14.8 28.7 32.8 37.5 52.9l13.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32l-32 0c-9.1 12.1-19.9 22.9-32 32l0 64c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-128 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-64c-34.9-26.2-58.7-66.3-63.2-112L68 304c-37.6 0-68-30.4-68-68s30.4-68 68-68l4 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-4 0c-11 0-20 9-20 20s9 20 20 20l31.2 0c12.1-59.8 57.7-107.5 116.3-122.8c12.9-3.4 26.5-5.2 40.5-5.2l128 0zm64 136a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
                ></path>
              </svg>
            </span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">Fixed Deposit</h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Find Out your FD Maturity Details with ease.
            </ul>
          </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/nps-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-money-bill-trend-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bill-trend-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="white" d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2c0 0 0 .1 0 .1c0 0 0 0 0 0l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-18.7L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64 352 64c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0s0 0 0 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48l416 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 304zM48 416l0 48 48 0c0-26.5-21.5-48-48-48zM96 304l-48 0 0 48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48l48 0 0-48zM416 304c0 26.5 21.5 48 48 48l0-48-48 0zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">
              National Pension Scheme
            </h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Calculate your NPS amount and pension easily.
            </ul>
          </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/rd-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-coins" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="coins" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="white" d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2c0 0 0 0 0 0s0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4l0 3.4 0 5.7 0 26.3zm32 0l0-32 0-25.9c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5l0 35.4c0 44.2-86 80-192 80S0 476.2 0 432l0-35.4c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">
              Recurring Deposit
            </h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              The simplest RD Calculator out there.
            </ul>
          </div>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-xl-4 mil-mb-30">
          <div class="mil-icon-box mil-with-bg mil-dark mil-center mil-up" @click="$router.push('/cagr-calculation')">
            <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 29.3947px, 0px) scale(0.4121);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="white" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64L0 400c0 44.2 35.8 80 80 80l400 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 416c-8.8 0-16-7.2-16-16L64 64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></span>
                  <h5 class="mil-mb-20 mil-light mil-up zoomOut">
                    Compound annual growth rate
                  </h5>
                  
                    <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
                      Figure out the compound annual growth rate in a flash.
                    </ul>
                
                </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/nsc-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 2.4482px, 0px) scale(0.951);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-file-invoice-dollar" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-invoice-dollar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path class="" fill="white" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-288-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM64 80c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L80 96c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16zm128 72c8.8 0 16 7.2 16 16l0 17.3c8.5 1.2 16.7 3.1 24.1 5.1c8.5 2.3 13.6 11 11.3 19.6s-11 13.6-19.6 11.3c-11.1-3-22-5.2-32.1-5.3c-8.4-.1-17.4 1.8-23.6 5.5c-5.7 3.4-8.1 7.3-8.1 12.8c0 3.7 1.3 6.5 7.3 10.1c6.9 4.1 16.6 7.1 29.2 10.9l.5 .1s0 0 0 0s0 0 0 0c11.3 3.4 25.3 7.6 36.3 14.6c12.1 7.6 22.4 19.7 22.7 38.2c.3 19.3-9.6 33.3-22.9 41.6c-7.7 4.8-16.4 7.6-25.1 9.1l0 17.1c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17.8c-11.2-2.1-21.7-5.7-30.9-8.9c0 0 0 0 0 0c-2.1-.7-4.2-1.4-6.2-2.1c-8.4-2.8-12.9-11.9-10.1-20.2s11.9-12.9 20.2-10.1c2.5 .8 4.8 1.6 7.1 2.4c0 0 0 0 0 0s0 0 0 0s0 0 0 0c13.6 4.6 24.6 8.4 36.3 8.7c9.1 .3 17.9-1.7 23.7-5.3c5.1-3.2 7.9-7.3 7.8-14c-.1-4.6-1.8-7.8-7.7-11.6c-6.8-4.3-16.5-7.4-29-11.2l-1.6-.5s0 0 0 0c-11-3.3-24.3-7.3-34.8-13.7c-12-7.2-22.6-18.9-22.7-37.3c-.1-19.4 10.8-32.8 23.8-40.5c7.5-4.4 15.8-7.2 24.1-8.7l0-17.3c0-8.8 7.2-16 16-16z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">
              National Savings Certificate
            </h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              How much return does NSC give you? Find out!
            </ul>
          </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/hra-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 2.4482px, 0px) scale(0.951);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-house-circle-check" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house-circle-check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path class="" fill="white" d="M320.7 352c8.1-89.7 83.5-160 175.3-160c8.9 0 17.6 .7 26.1 1.9L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1l32 0 0 69.7c-.1 .9-.1 1.8-.1 2.8l0 112c0 22.1 17.9 40 40 40l16 0c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2l31.9 0 24 0c22.1 0 40-17.9 40-40l0-24 0-64c0-17.7 14.3-32 32-32l64 0 .7 0zM640 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L480 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">
              House Rent Allowance
            </h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              The Most Accurate HRA calculator out there.
            </ul>
          </div>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/mf-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-sack-dollar" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="sack-dollar" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="white" d="M320 96L192 96 144.6 24.9C137.5 14.2 145.1 0 157.9 0L354.1 0c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128l128 0c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96L96 512c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4c0 0 0 0 0 0s0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20l0 14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1c0 0 0 0 0 0s0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4l0 14.6c0 11 9 20 20 20s20-9 20-20l0-13.8c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15c0 0 0 0 0 0l-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7l0-13.9z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">Mutual Fund</h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Find out your mutual fund corpus on maturity!
            </ul>
          </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/ssy-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-file-signature" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-signature" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="" fill="white" d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-19.3c-2.7 1.1-5.4 2-8.2 2.7l-60.1 15c-3 .7-6 1.2-9 1.4c-.9 .1-1.8 .2-2.7 .2l-64 0c-6.1 0-11.6-3.4-14.3-8.8l-8.8-17.7c-1.7-3.4-5.1-5.5-8.8-5.5s-7.2 2.1-8.8 5.5l-8.8 17.7c-2.9 5.9-9.2 9.4-15.7 8.8s-12.1-5.1-13.9-11.3L144 381l-9.8 32.8c-6.1 20.3-24.8 34.2-46 34.2L80 448c-8.8 0-16-7.2-16-16s7.2-16 16-16l8.2 0c7.1 0 13.3-4.6 15.3-11.4l14.9-49.5c3.4-11.3 13.8-19.1 25.6-19.1s22.2 7.8 25.6 19.1l11.6 38.6c7.4-6.2 16.8-9.7 26.8-9.7c15.9 0 30.4 9 37.5 23.2l4.4 8.8 8.9 0c-3.1-8.8-3.7-18.4-1.4-27.8l15-60.1c2.8-11.3 8.6-21.5 16.8-29.7L384 203.6l0-43.6-128 0c-17.7 0-32-14.3-32-32L224 0 64 0zM256 0l0 128 128 0L256 0zM549.8 139.7c-15.6-15.6-40.9-15.6-56.6 0l-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4zM311.9 321c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4L512.1 262.7l-71-71L311.9 321z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">
              Sukanya Samriddhi Yojana
            </h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Should you invest in SSY? Check for yourself!
            </ul>
          </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/sip-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-circle-dollar-to-slot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-dollar-to-slot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="white" d="M326.7 403.7c-22.1 8-45.9 12.3-70.7 12.3s-48.7-4.4-70.7-12.3l-.8-.3c-30-11-56.8-28.7-78.6-51.4C70 314.6 48 263.9 48 208C48 93.1 141.1 0 256 0S464 93.1 464 208c0 55.9-22 106.6-57.9 144c-1 1-2 2.1-3 3.1c-21.4 21.4-47.4 38.1-76.3 48.6zM256 91.9c-11.1 0-20.1 9-20.1 20.1l0 6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.7 4c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9c0 0 0 0 0 0s0 0 0 0s0 0 0 0c-2.2-.7-4.3-1.5-6.4-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1l0 6.4c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1l0-5.5c5.3-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4l0-6.3c0-11.1-9-20.1-20.1-20.1zM48 352l16 0c19.5 25.9 44 47.7 72.2 64L64 416l0 32 192 0 192 0 0-32-72.2 0c28.2-16.3 52.8-38.1 72.2-64l16 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-64c0-26.5 21.5-48 48-48z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">
              Systematic Investment Plan
            </h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              How much can you save by starting an SIP? Find out!
            </ul>
          </div>
        </div>
      </div>

      <div class="row align-items-center">
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/goal-sip-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-bullseye" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bullseye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path class="" fill="white" d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">Goal SIP</h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Know the sip amount required to achieve your goals.
            </ul>
          </div>
        </div>
        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/fire-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-money-bills" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="money-bills" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path class="" fill="white" d="M96 96l0 224c0 35.3 28.7 64 64 64l416 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64L160 32c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64l-64 0 0-64zM224 96c0 35.3-28.7 64-64 64l0-64 64 0zM576 256l0 64-64 0c0-35.3 28.7-64 64-64zM512 96l64 0 0 64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120L0 360c0 66.3 53.7 120 120 120l400 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-400 0c-39.8 0-72-32.2-72-72l0-240z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">FIRE</h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Know exactly how much you need to Retire.
            </ul>
          </div>
        </div>

        <div class="col-xl-4 mil-mb-30">
          <div
            class="mil-icon-box mil-with-bg mil-dark mil-center mil-up"
            @click="$router.push('/tax-calculation')"
          >
          <span data-v-c735fc0c="" class="icon1 zoomOut" style="translate: none; rotate: none; scale: none; transform: translate(0px);"><svg data-v-c735fc0c="" class="svg-inline--fa fa-file-shield" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-shield" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path class="" fill="white" d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 47-92.8 37.1c-21.3 8.5-35.2 29.1-35.2 52c0 56.6 18.9 148 94.2 208.3c-9 4.8-19.3 7.6-30.2 7.6L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zm39.1 97.7c5.7-2.3 12.1-2.3 17.8 0l120 48C570 277.4 576 286.2 576 296c0 63.3-25.9 168.8-134.8 214.2c-5.9 2.5-12.6 2.5-18.5 0C313.9 464.8 288 359.3 288 296c0-9.8 6-18.6 15.1-22.3l120-48zM527.4 312L432 273.8l0 187.8c68.2-33 91.5-99 95.4-149.7z"></path></svg></span>
            <h5 class="mil-mb-20 mil-light mil-up zoomOut">TAX</h5>

            <ul class="mil-text-s mil-dark-soft mil-mb-30 mil-up zoomOut">
              Smart planning to reduce your taxable income.
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
  name: "Calculator",
  data() {
    return {
      iconKey: Date.now(),
    };
  },
  methods: {
    animaFunction() {
      const zoomOutElements = this.$el.querySelectorAll(".zoomOut");
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

.mil-p-160-130 {
  background: linear-gradient(90deg, #192626, #1b1d1d);
}
.icon1 {
  font-size: 4rem;
  color: white !important;
  margin-bottom: 1rem;
}
.mil-dark{
  cursor: pointer;
}
</style>
