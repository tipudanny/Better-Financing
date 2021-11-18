import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueProgressBar from "@aacassandra/vue3-progressbar";
require('./assets/sass/main.scss')
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const options={
    color: '#2c97e8',
    failedColor: 'red',
    height: '5px',
    thickness: '3px',
}


createApp(App)
    .use(VueProgressBar, options)
    .use(store)
    .use(router)
    .mount('#app')
