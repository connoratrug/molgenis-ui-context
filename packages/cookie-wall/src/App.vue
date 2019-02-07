<template>
  <div id="app">
    <CookieWall cookieName="permissionforcookies" />
    <img alt="Vue logo" src="./assets/logo.png">
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CookieWall from './components/CookieWall.vue'

export default Vue.extend({
  name: 'app',
  components: { CookieWall }
})
</script>
