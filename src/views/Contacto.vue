<template>
  <v-row class="mx-auto mt-6" style="max-width: 1200px">
    <v-col cols="12">
      <v-card variant="flat">
        <v-card-title> </v-card-title>
        <v-card-subtitle> </v-card-subtitle>
        <v-card-text>
          <v-form ref="contactForm" v-model="isValid">
            <v-text-field density="compact" label="Nombre"> </v-text-field>
            <v-select
              :items="options"
              density="compact"
              item-title="name"
              item-value="id"
              :rules="[rules.required]"
              label="Quiero..."
            ></v-select>
            <v-text-field
              label="Correo electrónico"
              :rules="[rules.required, rules.email]"
              density="compact"
            ></v-text-field>
            <v-textarea
              :rules="[rules.required]"
              density="compact"
              auto-grow
              max-rows="4"
              placeholder="Mensaje adicional"
              clearable
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="sendEmail()">enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      isValid: false,
      rules: {
        email: (v) => !!(v || "").match(/@/) || "Ingresa un email válido",
        required: (v) => !!v || "Requerido",
      },
      options: [
        {
          id: 1,
          name: "Adoptar",
        },
        {
          id: 2,
          name: "Apadrinar",
        },
        {
          id: 3,
          name: "Donar",
        },
      ],
    };
  },
  methods: {
    async sendEmail() {
      const { valid } = await this.$refs.contactForm.validate();
      if (valid) {
        console.log("es valido");
      }
    },
  },
};
</script>
