import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

// 注册子应用
import { subNavList } from '@/store/sub'
import { registerApp } from '@/utils'
registerApp(subNavList)

createApp(App).use(router()).mount('#app-main')
