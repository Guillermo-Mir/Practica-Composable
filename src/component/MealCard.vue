<script setup>
const props = defineProps({
    nom: String,
    area: String,
    category: String,
    thumb:String,
    id:String
})
</script>

<template>
<div class="meal-item">
    <img :src="thumb" :alt="nom">
    <h3>{{ nom }}</h3>
    <p>{{ area }} - {{ category }} </p>
    <RouterLink :to="{name:'MealDetail', params:{idMeal:props.id}}">Recepta</RouterLink>
</div>
</template>
