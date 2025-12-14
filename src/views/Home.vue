<script setup>
import {useFetch} from "@/composable/useFetch";
import {ref} from 'vue'; 
import MealCard from "@/component/MealCard.vue";
import SearchBar from '@/component/SearchBar.vue';

const cerca = ref("chicken")
const url = ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`)

const {data, error, loading, fetchData} = useFetch(url);
console.log(data.value);

const receptaRebuda = ref('')

const buscarRecepta = (recepta) => {
  receptaRebuda.value = recepta;
  url.value = `https://www.themealdb.com/api/json/v1/1/search.php?s=${receptaRebuda.value}`;
  fetchData();
}

</script>

<template>
  <div>
      <SearchBar @cercaRecepta="buscarRecepta"/>
  </div>
  <div v-if = "loading">Carregant...</div>
  <div v-else-if = "error">{{error}}</div>
  <div v-else>
    <div v-if ="data && data.meals" class="meals-container">
        <MealCard v-for="p in data.meals" :key="p.idMeal" :p="p"/>
    </div> 
  </div>

</template>

<style scoped></style>