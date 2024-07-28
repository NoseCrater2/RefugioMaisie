<template>
  <router-view />
</template>

<script setup>
//
</script>
<style lang="scss">
$primary: #907dd0 !important;
$maisie-yellow: #f8edd0 !important;
.primary-bg {
  background: linear-gradient(45deg, #907dd0 0%, #50389d 100%) !important;
  backdrop-filter: blur(15px) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  -webkit-backdrop-filter: blur(15px) !important;
}

.secondary-bg {
  background: linear-gradient(45deg, #fcf1cf 0%, #fffcf2 100%) !important;
}

.text--yellow {
  color: $maisie-yellow;
}
</style>
