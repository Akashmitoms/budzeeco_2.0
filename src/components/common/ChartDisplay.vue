<template>
    <div class="chart-container" style="position: relative; height: 40vh; width: 100%">
      <component :is="chartType" v-if="loaded" :data="data" :options="options" />
    </div>
  </template>
  
  <script>
  import { Bar, Line } from 'vue-chartjs'
  import { Chart as ChartJS, registerables } from 'chart.js'
  
  ChartJS.register(...registerables)
  
  export default {
    name: 'ChartDisplay',
    components: { Bar, Line },
    props: {
      chartType: {
        type: String,
        default: 'line'
      },
      data: {
        type: Object,
        required: true
      },
      options: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        loaded: false
      };
    },
    watch: {
      data: {
        handler() {
          this.loaded = false;
          this.$nextTick(() => {
            this.loaded = true;
          });
        },
        deep: true
      },
      options: {
        handler() {
          this.loaded = false;
          this.$nextTick(() => {
            this.loaded = true;
          });
        },
        deep: true
      }
    },
    mounted() {
      this.loaded = true;
    }
  }
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: auto;
  }
  
  canvas {
    max-width: 100%;
  }
  </style>
  