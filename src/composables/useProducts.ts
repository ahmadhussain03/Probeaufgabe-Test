import {ref, computed, Ref} from 'vue'
import Product from '@/types/Product';
import Filters from './../types/Filters';
import useWatchProducts from './useWatchProducts';

const PRODUCT_URL = "https://gist.githubusercontent.com/benfranke/c33280a8df5f4f9db2e63ad45cab26a4/raw/f3ad6c00ff520c2667305103d5705bcbb57a7778/products.json"

function useProducts({ filter, id }: { filter: Ref<Filters>, id?: number }) {
    const isLoading = ref(false)
    const isFetched = ref(false)
    const data = ref<Product[]>([])
    const isError = ref(false)
    const error = ref()

    const { watchProducts } = useWatchProducts()
   
    fetch(PRODUCT_URL)
        .then(response => response.json())
        .then(response => {
            data.value = response.products
            isFetched.value = true
        })

    const products = computed(() => {
        if(id) {
            return data.value.filter(product => product.id === id)
        }
        if(filter.value === Filters.AllProducts) return data.value
        if(filter.value === Filters.AvailableProducts) {
            return data.value.filter(product => product.available)
        }
        if(filter.value === Filters.WatchProducts) {
            return data.value.filter(product => watchProducts.value.includes(product.id))
        }
    })

    return { isLoading, isFetched, products, isError, error, data }
}

export default useProducts