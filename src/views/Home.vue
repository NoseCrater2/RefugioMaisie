<template>
  <HexagonalHeader />

  <WhatWeDo />

  <MisionVisionValores />
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
}

.third-title {
  line-height: 1.3rem !important;
  white-space: normal !important;
  font-size: 17px !important;
}
</style>
