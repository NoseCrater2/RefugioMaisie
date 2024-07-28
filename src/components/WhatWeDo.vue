<template>
  <v-row style="max-width: 1200px !important" justify="center" class="mx-auto my-6">
    <v-col cols="12">
      <v-card-title class="text-center text-h2"> ¿Qué hacemos? </v-card-title>
    </v-col>
    <v-col cols="12" sm="12" md="3" v-for="item in items" :key="item.title">
      <v-card class="solid-card" :id="item.title" @click="action(item.title)">
        <div class="front">
          <v-card-title class="text-center first-title">
            {{ item.title }}
          </v-card-title>
          <div class="text-center my-4">
            <v-avatar size="200" style="box-shadow: 0px 0px 0px 15px #d3b8ff">
              <v-img :src="item.src"></v-img>
            </v-avatar>
          </div>
        </div>
        <div class="back">
          <v-card-subtitle class="second-title text-center d-flex align-center mt-6">
            {{ item.text }}
          </v-card-subtitle>
        </div>
      </v-card>
    </v-col>
    <v-col cols="12" class="pa-0 ma-0">
      <rescates-dialog
        v-if="dialogTitle === 'Rescates'"
        @closeDialog="closeFullScreenDialog()"
      ></rescates-dialog>
      <tnr-dialog
        v-if="dialogTitle === 'TNR'"
        @closeDialog="closeFullScreenDialog()"
      ></tnr-dialog>
    </v-col>
  </v-row>
</template>
<script>
import RescatesDialog from "./dialog/RescatesDialog.vue";
import TnrDialog from "./dialog/TnrDialog.vue";

export default {
  components: {
    RescatesDialog,
    TnrDialog,
  },
  data() {
    return {
      automaticSlide: true,
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      dialogTitle: null,
      items: [
        {
          title: "Rescates",
          text:
            "Acogemos a gatos abandonados en las calles, en situación de negligencia y/o en riesgo de salud para rehabilitarlos y darles una nueva oportunidad de vida.",
          src: new URL("/src/assets/images/rescates.png", import.meta.url).href,
          textButton: "Ver",
        },
        {
          title: "Adopción",
          text: "Promovemos la adopción de gatos en hogares responsables.",
          src: new URL("/src/assets/images/adopcion.png", import.meta.url).href,
          textButton: "Ver",
        },
        {
          title: "Seguimiento",
          text:
            "Velamos por el bienestar de nuestros adoptados por medio de visitas periódicas, videos y fotografías.",
          src: new URL("/src/assets/images/seguimiento.png", import.meta.url).href,
          textButton: "Ver",
        },
        {
          title: "TNR",
          text:
            "Capturar, Esterilizar, Devolver: Realizamos campañas de esterilización en nuestra zona para controlar la sobrepoblación.",
          src: new URL("/src/assets/images/tnr.png", import.meta.url).href,
          textButton: "Ver",
        },
      ],
    };
  },
  methods: {
    action(action) {
      this.dialogTitle = action;
      if (action === "Adopción") this.$router.replace({ name: "Casos" });
    },
    closeFullScreenDialog() {
      this.dialogTitle = null;
    },
  },
};
</script>

<style lang="scss">
.v-responsive .v-img {
  position: initial !important;
}
.v-card {
  transition-duration: 0.6s !important;
  transition-property: unset;
}
.solid-card {
  background: linear-gradient(45deg, #fcf1cfb4 0%, #fffcf2d3 100%) !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(0.5px) !important;
  -webkit-backdrop-filter: blur(0.5px) !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  border-radius: 20px !important;
  height: auto;
  padding-bottom: 16px;
  position: relative;
  cursor: pointer;
  @media only screen and (min-width: 600px) {
    transition-duration: 0.6s;
    height: 330px;
    transition-timing-function: ease-in-out;
    transform-style: preserve-3d;
    .back {
      visibility: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      transform: rotateY(180deg);
    }

    font-size: 2rem !important;
    line-height: 1rem !important;
  }
}

@media only screen and (min-width: 600px) {
  .solid-card:hover {
    .back {
      visibility: visible;
    }
    transform: rotateY(180deg);
    backface-visibility: visible;
    .front {
      visibility: hidden;
      z-index: 2;
    }
  }
}

.text-h2 {
  @media only screen and (max-width: 600px) {
    font-size: 2rem !important;
    line-height: 1rem !important;
  }
}
</style>
