import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
import btn from './directive/btn'

createApp(App).use(router).use(ElementPlus).use(btn).mount('#app')
