var app = new Vue({
  el: '#app',
  data: {
    currentTab: 'home',
    languageData: {}
  },
  methods: {
    lang: function(key) {
      return this.languageData[key]
    },
    setTab: function(tab) {
      this.currentTab = tab
    },
    setLanguage: async function(lanKey) {
      const { data } = await axios.get('./static/data/lan.json')
      Object.keys(data).forEach(wordKey => { data[wordKey] = data[wordKey][lanKey] })
      this.languageData = data
    },
    alertError: function(msg) {
      alert(msg)
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    },
    capitalizeAll: function (value) {
      if (!value) return ''
      return value
        .toLowerCase()
        .replace(/\b\w/g, l => l.toUpperCase())
    }
  },
  mounted: async function() {
    await this.setLanguage('en')
    new TypeIt('#typeit', {
      startDelay: 300,
      speed: 150
    }).go()
  }
})
