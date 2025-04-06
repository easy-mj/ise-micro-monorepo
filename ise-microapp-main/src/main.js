import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { startMicroApp } from '@/utils/startQiankun'

// 启动微前端
startMicroApp()

createApp(App).use(router()).mount('#app-main')
