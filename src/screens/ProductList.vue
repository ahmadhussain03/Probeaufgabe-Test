<template>
    <ProductLayout>
        <h1 class="py-2 font-bold text-2xl text-center">Product List</h1>
        <div class="product-list-wrapper overflow-auto">
            <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem>
        </div>
    </ProductLayout>
</template>

<script setup lang="ts">
import ProductItem from '@/components/ProductItem.vue';
import ProductLayout from '@/components/ProductLayout.vue';
import useProducts from '@/composables/useProducts';
import useFilter from '@/composables/useFilter';

const { filter } = useFilter()
const { products } = useProducts({filter})
</script>

<style>
.product-list-wrapper {
    @apply flex flex-col space-y-2 pb-20 px-2 w-full;
}
</style>