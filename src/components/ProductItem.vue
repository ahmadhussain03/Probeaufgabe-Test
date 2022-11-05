<template>
    <div @click="onProductClick" class="w-full border p-4 flex justify-between" :class="[product.available ? 'flex-row' : 'flex-row-reverse', isWatch(product.id) ? 'watch-product' : null]">
        <div class="self-center">
            <img :src="product.imageURL" class="w-24 h-24" />
        </div>
        <div class="flex-1 px-1">
            <div class="flex flex-row items-center justify-between">
                <h2 class="font-bold">{{ product.name }}</h2>
                <span class="text-sm" v-date>{{product.releaseDate}}</span>
            </div>
            <div>
                <p>
                    {{ product.description }}
                </p>
            </div>
            <div class="flex flex-row items-center justify-between">
                <div class="flex-1">
                    <p>Price: {{ product.price.value }} {{ product.price.currency }}</p>
                </div>
                <div>
                    <vue3starRatings v-model="product.rating" :disableClick="true" :showControl="false" starSize="15" inactiveColor="gray" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import useWatchProducts from '@/composables/useWatchProducts';
import Product from '@/types/Product';
import { useRouter } from 'vue-router';
import vue3starRatings from "vue3-star-ratings";

interface ProductItemProps {
    product: Product,
}

const router = useRouter()

const { isWatch } = useWatchProducts()

function onProductClick() {
    router.push({
        name: 'ProductDetail',
        params: {
            id: product.id,
            product: JSON.stringify(product)
        }
    })
}

const { product } = defineProps<ProductItemProps>()
</script>

<style>
.watch-product {
    background-color: #D1C4E9;
}
</style>