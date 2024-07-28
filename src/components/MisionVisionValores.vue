<template>
  <v-row class="mx-auto" style="max-width: 1200px">
    <v-col cols="12" v-for="(item, index) in mvv" :key="index">
      <v-card-title class="text-center text-h3 transparent-title py-4">
        {{ item.title }}
      </v-card-title>
      <v-card class="transparent-card my-10">
        <v-card-subtitle
          v-if="item.more.length === 0"
          class="text-center second-title py-4"
          style="opacity: 1"
        >
          {{ item.text }}
        </v-card-subtitle>
        <v-card-text
          class="ma-0 pa-0"
          :style="`height:${mobile ? 'auto' : '100%'}`"
          v-else
        >
          <v-carousel
            :show-arrows="false"
            v-if="mobile"
            class="my-6"
            continuous
            cycle
            hide-delimiter-background
            vertical-delimiters
            style="background: transparent"
          >
            <v-carousel-item v-for="(subitem, j) in item.more" :key="j">
              <template v-slot:default>
                <v-card color="transparent" elevation="0">
                  <v-card-title class="pa-0 ma-0 text-center">
                    <v-avatar size="150" class="rounded-0">
                      <v-img height="150" :src="subitem.icon"></v-img>
                    </v-avatar>
                  </v-card-title>

                  <v-card-title class="first-title text-center">
                    {{ subitem.title }}
                  </v-card-title>
                  <v-card-subtitle class="second-title text-center">
                    {{ subitem.text }}
                  </v-card-subtitle>
                </v-card>
              </template>
            </v-carousel-item>
          </v-carousel>

          <v-row v-else justify="center" class="ma-3">
            <v-col cols="6" sm="6" md="4" v-for="(subitem, j) in item.more" :key="j">
              <v-card color="transparent" elevation="0">
                <v-img height="100" :src="subitem.icon"></v-img>
                <v-card-title class="first-title text-center">
                  {{ subitem.title }}
                </v-card-title>
                <v-card-subtitle class="second-title text-center">
                  {{ subitem.text }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { useDisplay } from "vuetify";
export default {
  data() {
    return {
      mobile: useDisplay().mobile,
      mvv: [
        {
          title: "Misión",
          text:
            "Disminuir las situaciones de desamparo, maltrato y/o abandono de gatos en Lima, Perú, donde las condiciones precarias se hacen presentes.  Buscamos tomar medidas para el mejoramiento de la salud de los gatos y su reintegro a hogares responsables y definitivos.",
          more: [],
        },
        {
          title: "Visión",
          text:
            "Ser autosostenibles para que cada gato abandonado o maltratado del Perú encuentre recuperación plena en nuestro refugio, y hogares amorosos y duraderos. Además, generar conciencia sobre los derechos de los gatos callejeros para generar un cambio positivo en la sociedad peruana.",
          more: [],
        },
        {
          title: "Valores",
          text: "",
          more: [
            {
              icon: new URL("/src/assets/images/enfoque.png", import.meta.url).href,
              title: "Enfoque Compasivo",
              text:
                "Tratamos a los gatos con respeto y comprensión, reduciendo traumas y estrés en nuestros rescatados para que se sientan amados y protegidos.",
            },
            {
              icon: new URL("/src/assets/images/bienestar.png", import.meta.url).href,
              title: "Bienestar Integral",
              text:
                "Nos aseguramos de la esterilización de gatos rescatados para prevenir crías abandonadas. Brindamos cuidado médico, emocional y físico completo.",
            },
            {
              icon: new URL("/src/assets/images/adopciones.png", import.meta.url).href,
              title: "Adopciones Responsables",
              text:
                "Buscamos hogares amorosos promoviendo vínculos duraderos y responsables entre los rescatados y sus adoptantes.",
            },
            {
              icon: new URL("/src/assets/images/compromiso.png", import.meta.url).href,
              title: "Compromiso Comunitario",
              text:
                "Educamos sobre el bienestar felino y colaboramos con la comunidad, siendo una voz para los gatos y fomentando una convivencia armoniosa.",
            },
            {
              icon: new URL("/src/assets/images/transparencia.png", import.meta.url).href,
              title: "Transparencia y Colaboración",
              text:
                "Nos asociamos con otros apasionados por el bienestar animal, manteniendo una comunicación abierta y relaciones basadas en confianza.",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style lang="scss">
.transparent-card {
  background: linear-gradient(45deg, #fcf1cf 0%, #fffcf2 100%) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(0.5px) !important;
  -webkit-backdrop-filter: blur(0.5px) !important;
  border-radius: 30px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
}
.transparent-card:hover {
  transform: scale(1.05);
}
.transparent-title {
  background: linear-gradient(45deg, #907dd0e3 0%, #4c2bb894 100%) !important;
  border-radius: 30px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  border-radius: 30px;
  position: absolute;
  // z-index: 1;
  margin-top: -30px;
  left: 0;
  right: 0;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
}
</style>
