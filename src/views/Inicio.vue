<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <div>
          <h2 class="titulo-inicio">Lista de Juegos Disponibles:</h2>
        </div>
        <div v-for="(juego, index) in juegos" :key="index" class="col col-md-3 align-items-stretch">
          <div class="card text-left p-0 m-1">
            <img :src="juego.background_image" class="img-fluid rounded-start imagen-juegos" alt="" />
            <div class="card-body mh-75">
              <h5 class="card-title mediano">{{ juego.name.slice(0, 18) }}..</h5>
              <p class="card-text pequeno">Rating: {{ juego.rating }}/5</p>
              <p class="card-text pequeno">Updated: {{ juego.updated }}</p>
              <div class="">
                <a :href="rutaOpiniones(juego.name)" class="btn btn-primary">Opinar</a>
                <i class="fas fa-heart icono-corazon" @click="redirectToAdmin(juego.name)"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "inicio-component",
  data: function () {
    return {
      page: 1,
      juegos: [],
    };
  },
  created() {
    this.obtenerJuegos(); 
  },
  methods: {
    obtenerJuegos() {
      axios
        .get(`https://api.rawg.io/api/games?key=1f12792a1d4944f88a2be9bf798fd222&page=${this.page}`)
        .then((json) => {
          let results = json.data.results;
          results.forEach((juego) => {
            this.juegos.push(juego);
          });
          this.page++;
          console.log(this.juegos);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    rutaOpiniones(juegoName) {
      return `/opiniones/${juegoName.toLowerCase().replace(/\s+/g, "-")}`;
    },
    redirectToAdmin() {
      this.$router.push('/administracion');
    },
  },
};
</script>

<style scoped>
</style>
