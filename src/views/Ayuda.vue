<template>
  <div class="header">
    <v-img cover="" src="/src/assets/images/help.jpg" height="500" width="100%"> </v-img>
    <div class="area">
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <v-row class="mx-auto how-to-help" justify="center">
      <v-col cols="12" align-self="center">
        <v-card-title class="text-h2 first-title text-center my-5">
          ¿Cómo ayudar?
        </v-card-title>
      </v-col>
    </v-row>
  </div>
  <v-row style="max-width: 1200px" class="mx-auto py-8" justify="center">
    <v-col cols="12" sm="12" md="4" v-for="(item, index) in items" :key="index">
      <v-card variant="flat" height="400" width="300" class="upper-card mx-auto">
        <div class="card-background">
          <img cover aspect-ratio="1" :src="item.image" />
        </div>
        <v-card-title class="text-center first-title">
          {{ item.title }}
        </v-card-title>
        <v-card-text class="text-center">
          {{ item.subtitle }}
        </v-card-text>
        <!-- <v-card-actions style="position: absolute; top: 160px; right: 120px">
          <v-spacer></v-spacer>
          <v-btn icon="mdi-plus" variant="elevated" size="50" color="white"></v-btn>
          <v-spacer></v-spacer>
        </v-card-actions> -->
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        image: new URL("/src/assets/images/toys-and-beds.png", import.meta.url).href,
        title: "Juguetes y camitas",
        subtitle:
          "Puedes donar juguetes, camitas, torres e implementos relacionados para hacer más cómoda la vida de los gatitos en el refugio. Te lo agradecerán mucho.",
      },
      {
        image: new URL("/src/assets/images/donate.png", import.meta.url).href,
        title: "Donativos monetarios",
        subtitle:
          "Apadrina un michi de forma mensual desde un monto mínimo o colabora para la compra de comida, arena y otros implementos.",
      },
      {
        image: new URL("/src/assets/images/food.png", import.meta.url).href,
        title: "Comida y medicamentos",
        subtitle:
          "Día a día se agotan nuestros recursos, tú puedes ayudarnos a alimentar y tratar a nuestros más de 80 gatos beneficiados. ",
      },
      {
        image: new URL("/src/assets/images/no-reproduction.png", import.meta.url).href,
        title: "Evita que haya más gatitos en la calle",
        subtitle:
          "Puedes apadrinar esterilizaciones para reducir la sobrepoblación y sufrimiento de los gatitos callejeros.",
      },
      {
        image: new URL("/src/assets/images/partner.png", import.meta.url).href,
        title: "Voluntariado",
        subtitle:
          "Requerimos de ayuda para la limpieza del refugio, manejar nuestras redes sociales, ir a ferias de adopción, realizar fotografía, video, y para liderar nuestras campañas de concientización.",
      },
      {
        image: new URL("/src/assets/images/share.png", import.meta.url).href,
        title: "Compartir",
        subtitle:
          "Pasa la voz a tus amigos, familiares y conocidos para que conozcan más de nuestras iniciativas. Mientras más se unan, más posibilidades tendremos de alcanzar nuestros objetivos de ayuda a los gatos.",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.first-title {
  white-space: normal !important;
  word-break: auto-phrase !important;
}
.upper-card {
  border-radius: 30px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  border-radius: 30px !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(0.5px) !important;
  -webkit-backdrop-filter: blur(0.5px) !important;
  border-radius: 30px !important;
  border: 1px solid rgba(255, 255, 255, 0.18) !important;
  overflow: visible !important;
  background: linear-gradient(45deg, #fcf1cfb4 0%, #fffcf2d3 100%) !important;
}

.card-background {
  border-radius: 30px 30px 0 0 !important;
  background: linear-gradient(45deg, #907dd0e3 0%, #4c2bb894 100%) !important;
  height: 50%;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  img {
    position: absolute;
    height: 120%;
    margin-top: -40px;
    margin-left: auto;
    margin-right: auto;
  }
}

.area {
  width: 100%;
  height: 500px;
  background-color: #4159d01f;
  background: linear-gradient(45deg, #907dd0e3 0%, #4c2bb894 100%) !important;
  position: absolute;
  top: 64px;
}
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 500px;
  overflow: hidden;
}
.circles li {
  position: absolute;
  display: block;
  list-style: none;
  width: 20px;
  height: 20px;
  background-position: center center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="298.1" height="295.2"><ellipse transform="rotate(11.363 99.576 51.7)" style="fill:rgb(240,240,240,.2)" cx="99.6" cy="51.7" rx="34.7" ry="52.3"/><ellipse transform="rotate(168.637 197.571 51.684)" style="fill:rgb(240,240,240,.2)" cx="197.6" cy="51.7" rx="34.7" ry="52.3"/><ellipse transform="rotate(168.637 35.574 149.184)" style="fill:rgb(240,240,240,.2)" cx="35.6" cy="149.2" rx="34.7" ry="52.3"/><ellipse transform="rotate(11.363 262.58 150.722)" style="fill:rgb(240,240,240,.2)" cx="262.6" cy="150.7" rx="34.7" ry="52.3"/><path style="fill:rgb(240,240,240,.2)" d="M258.6 237.1s-15-22.5-35.5-37-27-49-39-67.5c-11.5-17.8-35-18-36.9-18-1.9 0-25.3.2-36.9 18-12 18.5-18.5 53-39 67.5s-35.5 37-35.5 37c-14 44 29.5 57.5 36 58s34.5-1.5 48.5-9.5c13.2-7.5 25.5-8.9 26.9-9 1.4.1 13.7 1.4 26.9 9 14 8 42 10 48.5 9.5s50-14 36-58z"/></svg>');
  animation: animate 25s linear infinite;
  bottom: -150px;
}
.circles li:nth-child(1) {
  left: 25%;
  width: 80px;
  height: 80px;
  animation-delay: 0s;
}

.circles li:nth-child(2) {
  left: 10%;
  width: 20px;
  height: 20px;
  animation-delay: 2s;
  animation-duration: 12s;
}

.circles li:nth-child(3) {
  left: 70%;
  width: 20px;
  height: 20px;
  animation-delay: 4s;
}

.circles li:nth-child(4) {
  left: 40%;
  width: 60px;
  height: 60px;
  animation-delay: 0s;
  animation-duration: 18s;
}

.circles li:nth-child(5) {
  left: 65%;
  width: 20px;
  height: 20px;
  animation-delay: 0s;
}

.circles li:nth-child(6) {
  left: 75%;
  width: 110px;
  height: 110px;
  animation-delay: 3s;
}

.circles li:nth-child(7) {
  left: 35%;
  width: 150px;
  height: 150px;
  animation-delay: 7s;
}

.circles li:nth-child(8) {
  left: 50%;
  width: 25px;
  height: 25px;
  animation-delay: 15s;
  animation-duration: 45s;
}

.circles li:nth-child(9) {
  left: 20%;
  width: 15px;
  height: 15px;
  animation-delay: 2s;
  animation-duration: 35s;
}

.circles li:nth-child(10) {
  left: 85%;
  width: 150px;
  height: 150px;
  animation-delay: 0s;
  animation-duration: 11s;
}

@keyframes animate {
  0% {
    transform: translateY(0) rotate(0deg);
    opacity: 1;
    border-radius: 0;
  }

  100% {
    transform: translateY(-1000px) rotate(720deg);
    opacity: 0;
    border-radius: 50%;
  }
}
.how-to-help {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  color: #ffffff80;
  max-width: 1200px;
  height: 500px;
}
</style>
