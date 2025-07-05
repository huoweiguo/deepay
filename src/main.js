import { createApp } from 'vue'
import router from './router'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'
import 'vue-toast-notification/dist/theme-sugar.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives
})

import '@/styles/reset.css'

createApp(App).use(router).use(vuetify).use(ToastPlugin).mount('#app')
