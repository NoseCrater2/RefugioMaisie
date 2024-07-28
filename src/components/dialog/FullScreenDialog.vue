<template>
  <v-dialog
    v-model="dialog"
    :class="backgroundColor"
    transition="dialog-bottom-transition"
    fullscreen
    opacity="0"
  >
    <v-card color="transparent">
      <v-toolbar style="background-color: #907dd0e3">
        <v-btn icon="mdi-close" color="white" @click="close()"></v-btn>

        <v-toolbar-title style="color: white">{{ dialogTitle }}</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <slot name="body"> </slot>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: true,
    };
  },
  methods: {
    close() {
      this.$emit("onClose");
    },
  },
  props: {
    dialogTitle: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: false,
      default: "bg-blue-grey-darken-4",
    },
  },
};
</script>
