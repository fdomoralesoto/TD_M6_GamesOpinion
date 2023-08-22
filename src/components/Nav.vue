<template>
  <div>
    <nav class="navbar navbar-expand-lg header-estilo" data-bs-theme="dark">
      <div class="container-fluid">
        <a class="d-flex align-items-center" href="/">
          <img src="/logo-gamesopinion-min.png" alt="Logo" class="me-2 logotipo" />
         
        </a>
        <button
          class="navbar-toggler link-color"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-5 custom-nav-item" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/" class="text-decoration-none link-color"
                  >Inicio</router-link
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "nav-component",
  data: function () {
    return {};
  },
};
</script>

<style scoped>
</style>