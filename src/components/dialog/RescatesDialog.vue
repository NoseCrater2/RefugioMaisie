<template>
  <full-screen-dialog dialogTitle="Rescates" @onClose="onCloseDialog()">
    <template v-slot:body>
      <v-carousel :cycle="false" height="100%" hide-delimiters show-arrows>
        <v-carousel-item v-for="slide in 16" :key="slide" position="end">
          <v-img :src="createUrl(slide)"></v-img>
        </v-carousel-item>
      </v-carousel>
    </template>
  </full-screen-dialog>
</template>
<script>
import FullScreenDialog from "./FullScreenDialog.vue";
export default {
  components: {
    FullScreenDialog,
  },
  methods: {
    onCloseDialog() {
      this.$emit("closeDialog");
    },
    createUrl(index) {
      return new URL(`/src/assets/images/rescate/${index + 1}.jpg`, import.meta.url).href;
    },
  },
};
</script>
