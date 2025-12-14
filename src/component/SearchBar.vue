<script setup>
import { ref } from 'vue';

const recepta = ref('')

const emit = defineEmits(['cercaRecepta'])

const cercaRecepta = () => {
    emit('cercaRecepta', recepta.value)
}

</script>

<template>
    <div class="top-bar">
        <div class="search-form">
            <input v-model="recepta" placeholder="Cerca una recepta"  @keydown.enter="cercaRecepta"/>
            <button @click="cercaRecepta">Buscar</button>
        </div>
    </div>
</template>