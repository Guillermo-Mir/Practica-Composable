<script setup>
    /*              :nom="p.strMeal"
                    :area="p.strArea"
                    :category="p.strCategory"
                    :thumb="p.strMealThumb"
                    :id="p.idMeal"*/ 
const props = defineProps({
    p: {
        type: Object,
        required:true
    }
})
</script>

<template>
<div class="meal-item">
    <img :src="props.p.strMealThumb" :alt="props.p.strMeal">
    <h3>{{ props.p.strMeal }}</h3>
    <p>{{ props.p.strArea }} - {{ props.p.strCategory }} </p>
    <RouterLink :to="{name:'MealDetail', params:{idMeal:p.idMeal}}">Recepta</RouterLink>
</div>
</template>
