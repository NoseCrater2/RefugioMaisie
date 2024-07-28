<template>
  <full-screen-dialog
    dialogTitle="Rescates"
    backgroundColor="bg-white"
    @onClose="onCloseDialog()"
  >
    <template v-slot:body>
      <v-row style="max-width: 1200px" class="mx-auto" no-gutters>
        <v-col style="max-height: 100px">
          <v-card flat>
            <v-card-title class="second-title text-center">
              Atrapamos gatos callejeros para esterilizarlos, los cuidamos hasta su
              recuperación y luego, los devolvemos a sus hábitats.
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-timeline
            :direction="$vuetify.display.mobile ? 'vertical' : 'horizontal'"
            align="center"
          >
            <v-timeline-item
              v-for="(step, index) in steps"
              :key="index"
              dot-color="#907dd0"
            >
              <template v-slot:opposite>
                <div
                  style="color: #907dd0"
                  class="pt-1 headline font-weight-bold text-h3"
                >
                  {{ index + 1 }}
                </div>
              </template>
              <div>
                <h2
                  style="color: #907dd0"
                  :class="`mt-n1 headline font-weight-light mb-4 text-center`"
                >
                  {{ step.name }}
                </h2>
                <div class="text-center">
                  <v-avatar
                    :image="step.image"
                    :size="$vuetify.display.mobile ? '6em' : '200'"
                  ></v-avatar>
                </div>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </template>
  </full-screen-dialog>
</template>
<script>
import FullScreenDialog from "./FullScreenDialog.vue";
export default {
  data() {
    return {
      steps: [
        {
          name: "Capturar",
          image: new URL("/src/assets/images/captura.jpg", import.meta.url).href,
        },
        {
          name: "Esterilizar",
          image: new URL("/src/assets/images/tnr.png", import.meta.url).href,
        },
        {
          name: "Devolver",
          image: new URL("/src/assets/images/devolver.jpg", import.meta.url).href,
        },
      ],
    };
  },
  components: {
    FullScreenDialog,
  },
  methods: {
    onCloseDialog() {
      this.$emit("closeDialog");
    },
  },
};
</script>
