<template>
  <div class="header">
    <v-img cover="" src="/src/assets/images/adopcion/main.jpg" height="500" width="100%">
    </v-img>
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
        <v-card-title class="text-h2 text-center my-5"> Casos de adopción </v-card-title>
        <v-card-subtitle class="text-h3">
          Nos complace ser testigos de las adopciones exitosas. Deseamos que todos
          nuestros rescatados tengan el mismo destino. Felicidades queridos michitos.
          <span><v-icon class="mb-2">mdi-cat</v-icon></span>
        </v-card-subtitle>
        <div class="text-center mt-5">
          <v-btn variant="outlined" class="rounded-xl" size="large">QUIERO ADOPTAR</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
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
    <v-carousel-item v-for="n in 13" :key="n">
      <template v-slot:default>
        <v-img height="500" class="case" cover :src="getImage(n)"></v-img>
      </template>
    </v-carousel-item>
  </v-carousel>
  <v-row v-else style="max-width: 1200px" class="mx-auto my-6">
    <v-col cols="12" md="4">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/3.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="8">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/2.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="6" class="d-flex flex-column">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/4.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="6">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/7.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="8">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/8.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="4">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/1.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="4">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/11.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="4">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/12.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12" md="4">
      <v-img
        height="500"
        class="case"
        cover
        src="/src/assets/images/adopcion/14.jpg"
      ></v-img>
    </v-col>
    <v-col cols="12">
      <v-row>
        <v-col>
          <v-row>
            <v-col cols="12">
              <v-img
                height="240"
                class="case"
                cover
                src="/src/assets/images/adopcion/5.jpg"
              ></v-img>
            </v-col>
            <v-col cols="12">
              <v-img
                height="240"
                class="case"
                cover
                src="/src/assets/images/adopcion/10.jpg"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            height="500"
            class="case"
            cover
            src="/src/assets/images/adopcion/9.jpg"
          ></v-img>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script setup>
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();

function getImage(index) {
  return new URL(`/src/assets/images/adopcion/${index + 1}.jpg`, import.meta.url).href;
}
</script>

<style lang="scss" scoped>
.case {
  border-radius: 30px;
  box-shadow: 0 8px 16px 0 rgba(31, 38, 135, 0.37) !important;
  backdrop-filter: blur(0.5px) !important;
  -webkit-backdrop-filter: blur(0.5px) !important;
  border: 10px solid rgba(255, 255, 255, 0.18) !important;

  :hover {
    cursor: pointer;
    transform: scale(1.2);
    transition-duration: 1s !important;
  }
}

.area {
  width: 100%;
  height: 500px;
  background-color: #4159d06a;
  background: linear-gradient(45deg, #907dd0e8 0%, #4c2bb87e 100%) !important;
  position: absolute;
  top: 64px;
  opacity: 1;
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

.text-h2 {
  @media only screen and (max-width: 600px) {
    font-size: 2rem !important;
    line-height: 1rem !important;
  }
}
.text-h3 {
  font-size: 1.7rem !important;
  text-overflow: unset !important;
  white-space: normal !important;
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: 1.2rem !important;
    line-height: 2rem !important;
  }
}

.v-carousel__controls__item .v-icon {
  color: #4159d0 !important;
}
</style>
