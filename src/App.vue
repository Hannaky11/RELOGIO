<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarSup from './components/NavBarSup.vue'
import NavBarInf from './components/NavBarInf.vue'
import Footer from './components/Footer.vue';
</script>

<template>
  <div>
   <NavBarSup />
   <NavBarInf />
   <RouterView />
   <Footer />
  </div>

  


 
</template>

<style scoped>

</style>
