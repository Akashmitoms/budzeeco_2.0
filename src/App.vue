
<template>
   <Header v-if="!mobileView"/>
   <MobileHeader v-if="mobileView" />
  <RouterView />
  <Footer />
</template>

<script>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import MobileHeader from './components/MobileHeader.vue';
import Footer from './components/Footer.vue';

export default {

  name: 'App',

  data () {
    return {
      mobileView: false,
    };
  },
methods: {
    checkMobileView() {
      if (window.innerWidth <= 1200) {
        this.mobileView = true;
      } else {
        this.mobileView = false;
      }
    },
  },
  mounted() {
    this.checkMobileView();
    window.addEventListener('resize', this.checkMobileView);
  },

  components: {
    Header,
    MobileHeader,
    Footer
  },
  
}

</script>