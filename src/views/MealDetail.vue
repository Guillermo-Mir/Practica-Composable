<script setup>
import {useFetch} from "@/composable/useFetch";
import {ref} from 'vue'; 
import MealCard from "@/component/MealCard.vue";
import { useRoute } from "vue-router";


const route = useRoute();
const mealID = route.idMeal
const url = ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealID}`)

const {data, error, loading, fetchData} = useFetch(url);
console.log(data.value);

</script>

<template>
    <h1>hola</h1>
  <div v-if = "loading">Carregant...</div>
  <div v-else-if = "error">{{error}}</div>
  <div v-else>
    <div v-if ="data && data.meals" class="meals-container">
  
    </div> 
  </div>

</template>

<style scoped></style>