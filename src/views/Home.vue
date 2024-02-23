<template>
  <HexagonalHeader />

  <WhatWeDo />

  <MisionVisionValores />
  <!-- <v-row class="py-5" style="max-width: 1200px; margin: auto" justify="center">
            <v-col cols="12">
                <v-card-title class="text-h4 text-center" style="color: #1C1604">
                    ¿Qué hacemos?
                </v-card-title>
            </v-col>
            <v-col
            v-for="item in items"
            :key="item.title"
            cols="12"  sm="12" md="4" lg="4">
                <v-card
                class="mx-auto pa-2 card"
                max-width="344"
                elevation="16"
                height="432"
                >
                    <v-img
                    style="border-radius: 12px;"
                      :src="item.src"
                      height="200px"
                      cover
                      class="ma-2"
                    ></v-img>

                    <v-card-title style="color: white;">
                        {{ item.title }}
                    </v-card-title>

                    <v-card-text style="color: white;">
                        {{ item.text }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text="VER" block="" variant="outlined" to="ayuda" rounded="xl" color="white" flat>
                        </v-btn>
                    </v-card-actions>
                </v-card>
          </v-col>
        </v-row> -->
  <!-- MISION VISION VALORES -->
  <!-- <v-row no-gutters>

            <v-col cols="12" style="max-width: 1200px; margin: auto;">

                <v-expansion-panels variant="inset"  multiple v-model="panel" class="mb-6 px-2">

                    <v-expansion-panel v-for="(item, i) in mvv" :key="i" :title="item.title">

                        <template v-slot:text>
                            <span v-if="item.more.length === 0">
                                {{ item.text }}
                            </span>
                            <v-row v-else justify="center">
                                <v-col cols="12" xs="12" sm="12" md="4" v-for="(subitem, j ) in item.more" :key="j">

                                    <v-card color="transparent" elevation="0">
                                        <v-img height="100" :src="subitem.icon"></v-img>
                                        <v-card-title class="first-title">
                                            {{ subitem.title  }}
                                        </v-card-title>
                                        <v-card-subtitle class="second-title">
                                            {{ subitem.text  }}
                                        </v-card-subtitle>
                                    </v-card>

                                </v-col>

                            </v-row>

                        </template>

                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
        </v-row> -->
</template>

<script>
import HexagonalHeader from "../components/HexagonalHeader.vue";
import WhatWeDo from "@/components/WhatWeDo.vue";
import MisionVisionValores from "@/components/MisionVisionValores.vue";
export default {
  data() {
    return {
      panel: [0, 1, 2],
    };
  },
  components: {
    HexagonalHeader,
    WhatWeDo,
    MisionVisionValores,
  },
};
</script>

<style lang="scss">
.first-title {
  line-height: normal;
  white-space: normal !important;
  @media only screen and (max-width: 600px) {
    font-size: 20px !important;
  }
}
.second-title {
  line-height: 2rem !important;
  white-space: normal !important;
  font-size: 20px !important;

  // @media only screen and (max-width: 600px) {
  //     line-height: 1rem !important;
  //     font-size: 10px !important;
  // }
}

.third-title {
  line-height: 1.3rem !important;
  white-space: normal !important;
  font-size: 17px !important;
  // @media only screen and (max-width: 600px) {
  //       font-size: 10px !important;
  //       line-height: 1rem !important;
  //   }
}

.card {
  border-radius: 12px;
  background: linear-gradient(45deg, #907dd0 0%, #50389d 100%) !important;
}
.card-one {
  border-radius: 12px;
  background: linear-gradient(45deg, #907dd0 0%, #50389d 100%) !important;
}

.mision {
  display: flex;
  background-image: linear-gradient(90deg, #50389d 0%, #bab3d3);
  .mision-title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background-size: cover;
  }
  .mision-text {
    width: 50%;
    color: black;
  }
  @media only screen and (max-width: 600px) {
    display: block;
    :first-child {
      width: 100%;
    }
    .mision-text {
      width: 100%;
    }
  }
}

.vision {
  background: linear-gradient(45deg, #907dd0 0%, #50389d 100%) !important;
}
.valores {
  background: linear-gradient(45deg, #907dd0 0%, #50389d) !important;
}
.v-expansion-panel {
  margin-bottom: 8px;
}
.v-expansion-panel-title {
  font-size: 34px !important;
  background: linear-gradient(45deg, #907dd0 0%, #50389d 100%) !important;
  /* border-bottom: 1px solid white; */
  color: white;
}
.v-expansion-panel-text {
  font-size: 20px !important;
  text-align: center;
  background: linear-gradient(45deg, #fcf1cf 0%, #fffcf2 100%);
  color: rgb(28, 22, 4);
}
.main-buttons {
  button {
    font-size: 20px !important;
    height: 48px !important;
  }

  @media only screen and (max-width: 600px) {
    button {
      font-size: 15px !important;
      height: 25px !important;
    }
  }
}
.v-expansion-panel__shadow {
  box-shadow: none !important;
}
</style>
