import { createApp } from 'vue'
import { createPinia } from 'pinia'

// custom css assets
import './assets/styles/shadow.css'
import './assets/styles/colors.css'
import './assets/styles/animations.css'
import './assets/styles/fonts.css'

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
import { faLocationDot, faEye, faStar } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons'

// libary added
library.add(faLocationDot, faInstagram, faFacebook, faTiktok, faEye, faStar)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

AOS.init({
  once: false,
  mirror: true,
})
