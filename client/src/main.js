import { createApp } from 'vue'
import { createPinia } from 'pinia'

// custom css assets
import '/src/assets/styles/shadow.css'
import '/src/assets/styles/colors.css'
import '/src/assets/styles/animations.css'
import '/src/assets/styles/fonts.css'
import '/src/assets/styles/loading.css'

// tailwind assets
import './assets/main.css'

// aos setup
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'

// fontawesome assets
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import fontawesome icon libary
import {
  fas,
  faLocationDot,
  faEye,
  faStar,
  faCalendar,
  faShareNodes,
} from '@fortawesome/free-solid-svg-icons'
import { far, faClock } from '@fortawesome/free-regular-svg-icons'
import {
  fab,
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'

// libary added
library.add(
  fas,
  far,
  fab,
  faInstagram,
  faFacebook,
  faTiktok,
  faWhatsapp,
  faEye,
  faStar,
  faClock,
  faLocationDot,
  faCalendar,
  faShareNodes,
)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

AOS.init({
  once: false,
  mirror: true,
})
