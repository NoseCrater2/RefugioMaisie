<template>
  <v-footer class="glass-footer">
    <v-row
      justify="space-between"
      align="start"
      class="mx-auto"
      style="max-width: 1200px; z-index: 2"
    >
      <v-col cols="12" sm="12" md="4" lg="4" class="mx-auto mt-4 text-center">
        <v-btn
          v-for="icon in icons"
          class="mx-3"
          :key="icon"
          color="white"
          variant="outlined"
          :icon="icon.icon"
          :href="icon.link"
          target="_blank"
        ></v-btn>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-list
          class="text-center"
          variant="compact"
          base-color="white"
          bg-color="transparent"
          color="white"
        >
          <v-list-item v-for="item in items" :key="item.id" :to="item.to">
            {{ item.name }}
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" sm="12" md="4" lg="4">
        <v-list
          class="text-center"
          variant="compact"
          color="white"
          bg-color="transparent"
          base-color="white"
        >
          <v-list-item v-for="option in options" :key="option.id">
            {{ option.name }}
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
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
  </v-footer>
</template>
<script>
export default {
  data() {
    return {
      icons: [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/profile.php?id=100063527021550",
        },
        {
          icon: "mdi-instagram",
          link: "https://instagram.com/elrefugiodemaisie?igshid=MzRlODBiNWFlZA==",
        },
        {
          icon: "mdi-whatsapp",
          link: "https://api.whatsapp.com/send?phone=51997206689",
        },
      ],
      items: [
        {
          name: "Adopciones",
          id: 1,
          to: "casos",
        },
        {
          name: "¿Cómo ayudar?",
          id: 2,
          to: "ayuda",
        },
      ],
      options: [
        {
          id: 1,
          name: "Rescates",
        },
        {
          id: 2,
          name: "Adopción",
        },
        {
          id: 3,
          name: "Seguimiento",
        },
        {
          id: 4,
          name: "TNR",
        },
      ],
    };
  },
};
</script>
<style scoped>
.glass-footer {
  backdrop-filter: blur(15px);
}
.area {
  width: 100%;
  height: 100%;
  background-color: #4159d01f;
  background: linear-gradient(45deg, #907dd0e3 0%, #4c2bb894 100%) !important;
  position: absolute !important;
  bottom: 0;
  left: 0;
}
.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
