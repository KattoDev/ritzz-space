import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

router.beforeEach((to, from, next) => {
  const title = to.meta.title || 'app'
  document.title = title
  next()
})

app.use(router)

app.mount('#app')
