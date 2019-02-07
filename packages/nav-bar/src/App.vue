<template>
  <div id="app">
    <NavBar :molgenis-menu="molgenisMenu"></NavBar>
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBar from './components/NavBar.vue'
import menu from './exampleMenu'


export default Vue.extend({
  name: 'app',
  components: { NavBar },
  data () {
    return {
      molgenisMenu: menu
    }
  }
})
</script>
