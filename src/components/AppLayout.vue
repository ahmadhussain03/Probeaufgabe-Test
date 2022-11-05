<template>
    <div class="absolute top-0 bg-blue-700 w-full py-4 text-center text-white">
        <h1>App</h1>
    </div>
    <FilterProvider>
        <div class="my-10">
            <slot></slot>
        </div>
    </FilterProvider>
</template>

<script setup lang="ts">
import FilterProvider from '@/providers/FilterProvider.vue';

</script>
