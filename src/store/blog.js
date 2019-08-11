export default {
  state: {
    entryReferences: [],
    currentEntry: ''
  },

  getters: {
    entry: function (state) {
      return state.currentEntry
    },

    entries: function (state) {
      return state.entryReferences
    }
  },

  mutations: {},

  actions: {
    loadBlogReferences: function (context) {
      const axios = require('axios')
      axios.get('https://www.kabi404.dev/blog/index.json')
        .then(function (response) {
          context.state.entryReferences = response.data
        })
        .catch(function (err) {
          console.log(err)
        })
    },

    loadEntry: function (context, name) {
      const axios = require('axios')
      axios.get('https://www.kabi404.dev/blog/all/' + name + '.md')
        .then(function (response) {
          context.state.currentEntry = response.data
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
