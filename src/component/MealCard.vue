<script setup>
const props = defineProps({
    nom: String,
    area: String,
    category: String,
    thumb:String
})


</script>

<template>
<div>
    <img :src="thumb" :alt="title">
    <h3>{{ nom }}</h3>
    <p>{{ area }} - {{ category }} </p>
    <!--RouterLink :to="{name:'Meal', params:{idMeal:meal.idMeal}}"></RouterLink-->
</div>

</template>

<style scoped>
    img{
        width: 100px;
        height: 100px;
    }
</style>