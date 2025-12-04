<script setup>
import {useFetch} from "@/composable/useFetch";
import {ref} from 'vue'; 

const cerca = ref("chicken")
const url = ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`)

const {data, error, loading, fetchData} = useFetch(url);
console.log(data.value);

</script>

<template>
  <h1>You did it!</h1>
  <div v-if = "loading">Carregant...</div>
  <div v-else-if = "error">{{error}}</div>
  <div v-else>
    <div v-if ="data && data.meals">{{data}}</div> 
  </div>

</template>

<style scoped></style>
