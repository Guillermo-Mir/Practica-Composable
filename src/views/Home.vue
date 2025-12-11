<script setup>
import {useFetch} from "@/composable/useFetch";
import {ref} from 'vue'; 
import MealCard from "@/component/MealCard.vue";

const cerca = ref("chicken")
const url = ref(`https://www.themealdb.com/api/json/v1/1/search.php?s=${cerca.value}`)

const {data, error, loading, fetchData} = useFetch(url);
console.log(data.value);

</script>

<template>
  <div v-if = "loading">Carregant...</div>
  <div v-else-if = "error">{{error}}</div>
  <div v-else>
    <div v-if ="data && data.meals" class="meals-container">
        <MealCard v-for="p in data.meals" :key="p.idMeal" :meal="p"
                    :nom="p.strMeal"
                    :area="p.strArea"
                    :category="p.strCategory"
                    :thumb="p.strMealThumb"
                    :id="p.idMeal">
                    
        </MealCard>
    </div> 
  </div>

</template>

<style scoped></style>