<template>
  <v-app-bar class="limited secondary-bg">
    <template v-slot:prepend>
      <img class="resized" src="../../assets/logo2.png" @click="openMenu()" />
    </template>
    <v-app-bar-title style="margin-inline-start: 0" :class="mobile ? 'text-center' : ''">
      <v-btn @click="$router.replace('/')" size="large" text="El Refugio de Maisie">
      </v-btn>
    </v-app-bar-title>
    <div v-if="!mobile">
      <v-spacer></v-spacer>
      <v-btn text="Adopciones" @click="$router.replace('casos')"></v-btn>
      <v-btn text="¿Cómo ayudar?" @click="$router.replace('ayuda')"></v-btn>
    </div>
  </v-app-bar>
  <v-navigation-drawer
    v-if="mobile && menu"
    v-model="menu"
    style="position: fixed; background: #907dd0be"
  >
    <v-list color="transparent" active-class="text--yellow">
      <v-list-item
        base-color="white"
        color="white"
        prepend-icon="mdi-cat"
        title="Adopciones"
        :to="{ name: 'Casos' }"
      ></v-list-item>
      <v-list-item
        base-color="white"
        color="white"
        prepend-icon="mdi-hospital"
        title="¿Cómo ayudar?"
        :to="{ name: 'Ayuda' }"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useDisplay } from "vuetify";
import { ref } from "vue";

const { mobile } = useDisplay();
const menu = ref(false);
function openMenu() {
  if (!mobile) {
    return;
  }
  menu.value = true;
}
</script>

<style lang="scss">
.resized {
  height: 50px;
}

.limited {
  .v-toolbar__content {
    max-width: 1200px;
    margin: auto;
  }
  font-size: 3rem !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  box-sizing: border-box !important;
  backdrop-filter: blur(15px) !important;
}
</style>
