<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <FooterComponent :molgenisFooter="molgenisFooter"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FooterComponent from './components/FooterComponent.vue'
import molgenisFooter from './exampleFooter'

export default Vue.extend({
  name: 'app',
  components: { FooterComponent },
  data () {
    return {
      molgenisFooter: molgenisFooter
    }
  }
})
</script>
