<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useFetch } from "@/composable/useFetch"

const route = useRoute()


const mealID = ref(parseInt(route.params.idMeal))


const url = ref(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID.value}`)


const { data, error, loading, fetchData } = useFetch(url)


const meal = computed(() => {
  return data.value?.meals?.[0] || {}
})


watch(() => route.params.idMeal, (newId) => {
  mealID.value = parseInt(newId)
  url.value = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID.value}`
  fetchData()
})
</script>

<template>
  <div class="meal-detail">
    <div v-if="loading" class="meal-status">Cargando...</div>
    <div v-else-if="error" class="meal-status">{{ error }}</div>

    <div v-else class="meal-detail-card">
      <h1>{{ meal.strMeal }}</h1>
      <img :src="meal.strMealThumb" :alt="meal.strMeal" />
      <p>{{ meal.strInstructions }}</p>
    </div>
  </div>
</template>
