import Vue from 'vue'
import lan from './assets/lan.json'

Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())

Vue.filter('lang', value => {
  return lan[value].en
})

Vue.filter('capitalizeAll', (value) => value.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase()))
