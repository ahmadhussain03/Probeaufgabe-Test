import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const ProductListView = () => import('@/screens/ProductList.vue')
const ProductDetailView = () => import('@/screens/ProductDetail.vue')

const routes: RouteRecordRaw[] = [
    { path: '/', component: ProductListView, name: 'ProductList' },
    { path: '/product/:id', component: ProductDetailView, name: 'ProductDetail', props: {  } }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router