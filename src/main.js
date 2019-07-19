import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faDatabase, faServer, faMobile, faFileCode, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faGithubAlt, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add({
  faEnvelope,
  faDatabase,
  faServer,
  faMobile,
  faFileCode,
  faGlobe
})

library.add({
  faTwitter,
  faGithubAlt,
  faLinkedinIn,
  faGithub
})

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
