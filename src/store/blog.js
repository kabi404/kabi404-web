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
          context.entryReferences = response.data
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  }
}
