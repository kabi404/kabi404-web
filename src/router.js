import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Skills from './views/Skills.vue'
import Projects from './views/Projects.vue'
import Blog from './views/Blog.vue'

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
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/blog/:entry',
      name: 'blog',
      component: Blog
    }
  ]
})
