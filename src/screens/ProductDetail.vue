<template>
    <div class="w-full border p-4 flex flex-row justify-between">
        <div class="self-center">
            <img :src="product.imageURL" class="w-24 h-24" />
        </div>
        <div class="flex-1 px-1">
            <div class="flex flex-row items-center justify-between">
                <h2 class="font-bold">{{ product.name }}</h2>
                <span class="text-sm" v-date>{{ product.releaseDate }}</span>
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
                    <vue3starRatings v-model="product.rating" :disableClick="true" :showControl="false" starSize="15"
                        inactiveColor="gray" />
                </div>
            </div>
        </div>
    </div>
    <div class="p-3">
        <button @click="deleteProduct(product.id)" class="rounded-md px-3 py-1 bg-red-700 text-white w-full" v-if="isWatch(product.id)">
            Forget
        </button>
        <button @click="addProduct(product.id)" class="rounded-md px-3 py-1 bg-green-700 text-white w-full" v-else>
            Remember
        </button>
    </div>
</template>

<script setup lang="ts">
import useWatchProducts from '@/composables/useWatchProducts';
import vue3starRatings from "vue3-star-ratings";
import { useRoute } from 'vue-router';
import Product from '@/types/Product';
const route = useRoute()
const { addProduct, deleteProduct, isWatch } = useWatchProducts()

const product = JSON.parse(route.params.product as string) as Product

</script>

<style>
</style>