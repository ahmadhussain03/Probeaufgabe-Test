<template>
    <slot></slot>
</template>

<script setup lang="ts">
import Filters from '@/types/Filters';
import { provide, ref } from 'vue';
import key from '@/constants/filter'

const filter = ref<Filters>(Filters.AllProducts)

function changeFilter(newFilter: Filters) {
    filter.value = newFilter
}

provide(key, {
    filter,
    changeFilter
})
</script>