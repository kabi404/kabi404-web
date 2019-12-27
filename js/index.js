var app = new Vue({
  el: '#app',
  data: {
    currentTab: 'home'
  },
  methods: {
    lang: function(key) {
      return key
    },
    setTab: function(tab) {
      this.currentTab = tab
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    },

    capitalizeAll: function (value) {
      return value
        .toLowerCase()
        .replace(/\b\w/g, l => l.toUpperCase())
    }
  }
})
