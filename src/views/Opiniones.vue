<template>
  <div class="container">
    <div class="row contendor-opiniones">
      <div class="col">
        <h2 class="titulo-opiniones">Escribe tu opinión para el juego: {{ formattedJuegoName }}</h2>
        <form @submit.prevent="agregarOpinion">
          <div class="mb-3">
            <label for="nombre" class="form-label">Nombre:</label>
            <input v-model="nombre" type="text" class="form-control" id="nombre" required :placeholder="nombrePlaceholder">
          </div>
          <div class="mb-3">
            <label for="opinion" class="form-label">Opinión:</label>
            <textarea v-model="opinion" class="form-control" id="opinion" required :placeholder="opinionPlaceholder"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">{{ modoEdicion ? 'Actualizar Opinión' : 'Agregar Opinión' }}</button>
        </form>
        
        <h3 class="titulo-opiniones mt-4">Acá puedes ver tu comentario:</h3>
        <div v-if="opiniones.length === 0" class="alert alert-danger">No existen opiniones para mostrar</div>
        <div v-else>
          <div v-for="(opinion, index) in opiniones" :key="index" class="card mt-2">
            <div class="card-body">
              <p class="card-text">Opinión creada por: {{ opinion.nombre }}</p>
              <p class="card-text">Opinión: {{ opinion.contenido }}</p>
              <div class="botones-edicion">
              <button @click="editarOpinion(index)" class="btn btn-primary">Editar</button>
              <button @click="eliminarOpinion(index)" class="btn btn-danger">Eliminar</button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "opiniones-component",
  computed: {
    juegoName() {
      return this.$route.params.name;
    },
    formattedJuegoName() {
      return this.juegoName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    nombrePlaceholder() {
      return "Tu nombre...";
    },
    opinionPlaceholder() {
      return "Tu opinión debe ir aquí...";
    },
    modoEdicion() {
      return this.opinionEditIndex !== -1;
    },
  },
  data() {
    return {
      nombre: "",
      opinion: "",
      opinionEditIndex: -1,
      opiniones: [],
    };
  },
  methods: {
    agregarOpinion() {
      if (this.nombre && this.opinion) {
        if (this.modoEdicion) {
          this.opiniones[this.opinionEditIndex].nombre = this.nombre;
          this.opiniones[this.opinionEditIndex].contenido = this.opinion;
          this.opinionEditIndex = -1;
        } else {
          this.opiniones.push({
            nombre: this.nombre,
            contenido: this.opinion,
          });
        }
        this.nombre = "";
        this.opinion = "";
      }
    },
    editarOpinion(index) {
      this.nombre = this.opiniones[index].nombre;
      this.opinion = this.opiniones[index].contenido;
      this.opinionEditIndex = index;
    },
    eliminarOpinion(index) {
      this.opiniones.splice(index, 1);
      if (index === this.opinionEditIndex) {
        this.opinionEditIndex = -1; 
      }
    },
  },
};
</script>

<style scoped>
</style>
