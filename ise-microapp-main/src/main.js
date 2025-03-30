import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { startMicroApp } from '@/utils/startMicroApp'
import { IseCustomEvent } from 'ise-microapp-spa/customEvent'

// 启动微前端
startMicroApp()

const ice = new IseCustomEvent()
ice.on('sendMsg', (data) => {
  console.log(data)
})
window.ice = ice

createApp(App).use(router()).mount('#app-main')
