import Vue from 'vue'

Vue.filter('capitalize', value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())

Vue.filter('capitalizeAll', (value) => value.replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase()))
