import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


// changes
import router from './router'

import store from "./store"

import './index.css';
// changes
createApp(App)

    .use(store)
    .use(router)
    .mount('#app')
