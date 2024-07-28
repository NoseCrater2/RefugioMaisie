<template>
  <v-row
    no-gutters
    style="max-width: 1200px !important"
    justify="center"
    class="mx-auto mt-6"
  >
    <v-col cols="12">
      <v-card class="glass-card">
        <div class="d-flex justify-center align-center">
          <div class="presentation">
            <v-card-title
              class="text-h3 first-title text-center mb-5"
              style="color: #1c1604"
            >
              ¿Quiénes somos?
            </v-card-title>
            <v-card-subtitle
              class="second-title text-center ma-auto"
              style="color: #1c1604; opacity: 1 !important; max-width: 1200px"
            >
              Somos un refugio que acoge gatos en situación de abandono en Lima, Perú.
              Buscamos disminuir las situaciones de desamparo, maltrato y/o abandono de
              gatos a través de las adopciones responsables, esterilizaciones y rescate.
              Actualmente contamos con 86 felinos a nuestro cuidado.
            </v-card-subtitle>
            <v-card-actions class="mt-10 main-buttons">
              <v-spacer></v-spacer>
              <v-btn
                style="background: linear-gradient(45deg, #fcf1cf 0%, #fffcf2 100%)"
                variant="flat"
                rounded="xl"
                size="large"
                class="mr-4"
                :to="{ name: 'Casos' }"
              >
                adopciones
              </v-btn>
              <v-btn
                :to="{ name: 'Ayuda' }"
                color="#f8edd0"
                rounded="xl"
                variant="outlined"
                size="large"
              >
                ¿Cómo ayudar?
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </div>
          <div class="main-image" v-if="!mobile">
            <v-avatar size="400" rounded="0">
              <v-img cover src="../assets/images/main.png"></v-img>
            </v-avatar>
          </div>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>
<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>
<style lang="scss">
.glass-card {
  overflow: hidden;
  background: linear-gradient(45deg, #907dd0e3 0%, #4c2bb894 100%) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(0.5px) !important;
  -webkit-backdrop-filter: blur(0.5px) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  border-radius: 20px !important;
}
</style>
