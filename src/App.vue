<template>
  <div id="app">
    <navegation />
    <!-- <transition mode="out-in" enter-active-class="animate__animated animate__zoomInDown" leave-active-class="animate__animated animate__zoomOut"> -->
    <transition>
      <router-view />
    </transition>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "app",
  // props: {},
  data: function () {
    return {};
  },
  components: {
    navegation: Nav,
  },
};
</script>
<style>
</style>
