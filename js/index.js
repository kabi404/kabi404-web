

var app = new Vue({
  el: '#app',
  data: {
    currentTab: 'home'
  },
  methods: {
    lang: function(key) {
      return key
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  }
})
