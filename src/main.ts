import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'bootstrap-icons/font/bootstrap-icons.css'
// import '@/style/blog.css'
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8080/'
createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
