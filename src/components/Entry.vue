<template>
  <vue-simple-markdown :source="entry.content"/>
</template>

<script>
import VueSimpleMarkdown from 'vue-simple-markdown'

export default {
  name: 'entry',

  components: {
    VueSimpleMarkdown
  },

  data: function () {
    return {
      entry: {

      }
    }
  },

  computed: {
    currentTab: function () {
      return this.$route.name
    },

    currentLan: function() {
      return this.$store.state.lan
    }
  },

  methods: {
    loadEntry: function () {
      let entryId = this.$route.params.entry
      let entry = require(`@/assets/blog/all/${entryId}.json`)
      if(entry)
        this.entry = entry
    }
  },

  mounted: function () {
    this.loadEntry()
  }
}
</script>
