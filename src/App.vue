<script setup>
import Home from './views/Home.vue';


</script>

<template>
  <h1>ProductList</h1>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
    <RouterView/>
    <hr />
  </div>
  
</template>

<style scoped></style>

