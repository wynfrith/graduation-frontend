<script>
  import Navbar from './components/commons/topbar.vue'

  export default {
    name: "App",

    components: {
      'navbar':Navbar
    }
  }
</script>

<template>
  <navbar></navbar>
  <router-view transition="fade" transition-mode="out-in" ></router-view>
</template>
