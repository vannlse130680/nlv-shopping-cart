import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createApp } from 'vue'
import App from './App.vue'
import store from "@/store.js";
import router from "@/router/index.js";
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App).use(store).use(router).mount('#app')
