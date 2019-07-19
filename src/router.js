import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: 'projects',
      name: 'prjects',
      component: Projects
    }
  ]
})
