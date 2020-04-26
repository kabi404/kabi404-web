import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './filters'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

library.add(faLanguage)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
