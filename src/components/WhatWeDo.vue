<template>
    <v-row style="max-width: 1200px!important;" justify="center" class="mx-auto my-6">
        <v-col cols="12">
            <v-card-title class="text-center text-h2">
                ¿Qué hacemos?
            </v-card-title>
        </v-col>
        <v-col cols="12" sm="12" md="3" v-for="item in items" :key="item.title">
            <v-card class="solid-card" >
                <div class="front">
                    <v-card-title class="text-center first-title">
                    {{ item.title }}
                    </v-card-title>
                    <div class="text-center my-4">
                        <v-avatar size="200" >
                            <v-img :src="item.src"></v-img>
                        </v-avatar>
                    </div>
                </div>
                <div class="back">
                    <v-card-subtitle class="second-title text-center d-flex align-center" style="height: 100%;">
                    {{ item.text }}
                    </v-card-subtitle>
                </div>
            </v-card>
        </v-col>
    </v-row>

</template>
<script>
export default {
  data(){
    return{
      items: [
            {
                title: 'Rescates',
                text: 'Acogemos a gatos abandonados en las calles, en situación de negligencia y/o en riesgo de salud para rehabilitarlos y darles una nueva oportunidad de vida.',
                src: 'src/assets/images/rescates.png',
            },
            {
                title: 'Adopción',
                text: 'Promovemos la adopción de gatos en hogares responsables.',
                src: 'src/assets/images/adopcion.png',
            },
            {
                title: 'Seguimiento',
                text: ' Velamos por el bienestar de nuestros adoptados por medio de visitas periódicas, videos y fotografías.',
                src: 'src/assets/images/seguimiento.png',
            },
            {
                title: 'TNR',
                text: 'Capturar, Esterilizar, Devolver: Realizamos campañas de esterilización en nuestra zona para controlar la sobrepoblación.',
                src: 'src/assets/images/tnr.png',
            },
        ],
    }
  }
}
</script>

<style lang="scss">
.v-card{
    transition-duration: 0.6s !important;
    transition-property: unset;
}
.solid-card {
    background: linear-gradient(45deg, #fcf1cfb4 0%, #fffcf2d3 100%) !important;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37) !important;
    backdrop-filter: blur(0.5px) !important;
    -webkit-backdrop-filter: blur(0.5px) !important;
    border-radius: 10px !important;
    border: 1px solid rgba(255, 255, 255, 0.18) !important;
    border-radius: 20px !important;
    height: 350px;
    position: relative;
    cursor: pointer;
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
    transform-style: preserve-3d;
    // backface-visibility: hidden;
    .back{
        visibility: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: rotateY(180deg);


    }

}

.solid-card:hover{

    .back{
        visibility:visible;
    }
    transform: rotateY(180deg);
    backface-visibility:visible;
    .front{
        visibility: hidden;
        z-index: 2;
    }
}

</style>
