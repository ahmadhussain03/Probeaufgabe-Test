<template>
    <div class="container">
        <ul class="list-wrapper">
            <li v-for="filter in Filters" :key="filter" class="cursor-pointer" 
                :class="{ active: filterion.filter.value === filter}"
                @click="filterion.changeFilter(filter)"
            >
                {{ filter }}
            </li>
        </ul>
    </div>
    <slot></slot>
</template>

<script setup lang="ts">
import useFilter from '@/composables/useFilter';
import Filters from '@/types/Filters';

const filterion = useFilter()
</script>

<style>
.active {
    @apply font-bold text-lg text-blue-600;
}

.container {
    @apply fixed bottom-0 w-full bg-gray-300 py-4;
}

.list-wrapper {
    @apply flex flex-row items-center justify-between px-4;
}

.list-item {
    @apply cursor-pointer;
}
</style>