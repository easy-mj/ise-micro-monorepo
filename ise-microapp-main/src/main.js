import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// 启动微前端
import { startMicroApp } from '@/utils/startMicroApp'
startMicroApp()

createApp(App).use(router()).mount('#app-main')
