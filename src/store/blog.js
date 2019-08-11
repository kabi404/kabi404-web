export default {
  state: {
    entryReferences: [],
    currentEntry: ''
  },

  getters: {},

  mutations: {
    setEntryReferences: function () {

    }
  },

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
          alert(JSON.stringify.response)
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
