import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './filters'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faLinkedin, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = true

library.add(faLanguage, faEnvelope)
library.add(faTwitter, faLinkedin, faLinkedinIn, faGithub)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
