import { createApp } from 'vue'

import './index.css'
import App from './App.vue'

import router from '@/routes'

const app = createApp(App)

app.use(router)

app.directive('date', (el) => {
    const value = parseInt(el.innerText)
    const date = value ? new Date(value).toDateString() : null
    el.innerText = date
})

app.mount('#app')
