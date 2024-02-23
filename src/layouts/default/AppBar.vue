<template>
  <v-app-bar class="limited">
    <template v-slot:prepend>
      <img class="resized" src="../../assets/logo2.png">
    </template>
    <v-app-bar-title style="margin-inline-start: 0;">

      <v-btn
      @click="$router.replace('/')"
      size="large"
      text="El Refugio de Maisie">
      </v-btn>
    </v-app-bar-title>
    <!-- <v-spacer></v-spacer> -->
    <!-- <v-btn  text="Adopciones" @click="$router.replace('casos')" ></v-btn>
    <v-btn  text="¿Cómo ayudar?" @click="$router.replace('ayuda')"></v-btn> -->
  </v-app-bar>
</template>

<script setup>
</script>

<style lang="scss">
$primary: #907dd0 !important;
$maisie-yellow: #f8edd0 !important;
.resized{
  height: 50px;
}

.limited{
  .v-toolbar__content{
    max-width: 1200px;
    margin: auto;
  }

  background: linear-gradient(150.46deg, rgba(255, 255, 255, 0.5) -12.61%, rgba(255, 255, 255, 0.25) 110.1%) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  box-sizing: border-box !important;
  backdrop-filter: blur(15px) !important;
  border-radius: 6px !important;

}

</style>
