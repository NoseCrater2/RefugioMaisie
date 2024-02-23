<template>
  <v-app class="glass-container">
    <default-bar />

    <default-view />

    <default-footer />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultFooter from './Footer.vue'
</script>

<style>
.glass-container{

  background-repeat: no-repeat!important;
  background-size: cover !important;
  background-position: center center !important;
  background-attachment: fixed !important;
}
</style>
