import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const app = createApp(App)
app.use(router)
app.mount('#app')
