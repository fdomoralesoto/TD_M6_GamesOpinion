<template>
  <div class="container">
    <div class="row contendor-opiniones">
      <div class="col">
        <h2>Para ver la información ingresa tus datos</h2>
        <button @click="ingresarDatos" class="btn btn-success">Ingresar Datos</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminComponent",
  computed: {
    juegoName() {
      return this.$route.params.juegoName;
    },
  },
  methods: {
    ingresarDatos() {
      const nombre = prompt("Ingrese Nombre:");
      const apellido = prompt("Ingrese Apellido:");

      if (nombre && apellido) {
        console.log("Nombre:", nombre);
        console.log("Apellido:", apellido);
      }
    },
  },
};
</script>

<style scoped>
</style>
