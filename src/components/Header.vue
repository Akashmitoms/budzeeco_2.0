<template>
     
      <div class="mil-top-panel mil-dark-2">
        <div class="container">
          <RouterLink to="/" class="mil-logo"
            ><img src="\img\logo budzeeco_1.jpg" alt="Plax" width="90" 
          /></RouterLink>
          <nav class="mil-top-menu">
            <ul>
              <li class="mil-has-children mil-active">
                <RouterLink to="/masterClass">MASTERCLASS​</RouterLink>
              </li>
              <li class=""><RouterLink to="/calculator">CALCULATORS​</RouterLink></li>
              <li class=""><RouterLink to="/myMentor">MY MENTOR</RouterLink></li>
              
            </ul>
          </nav>
          <div class="mil-menu-buttons">
            <a class="mil-btn mil-sm" href="register.html">Log in</a>
            
            <div class="mil-menu-btn"><span></span></div>
            <a class="mil-btn mil-sm" style="margin-left: 10px;" href="register.html">JOIN  COMMUNITY</a>
          </div>
          <div class="mil-menu-buttons">
           
          </div>
        </div>
      </div>
</template>

<style scoped>
@import '../assets/style1.css';
@import '../assets/style2.css';
@import '../assets/style3.css';

.mil-top-panel {
  background: linear-gradient(90deg, #1b1d1d, #0d5152 50%, #1b1d1d);
}

</style>