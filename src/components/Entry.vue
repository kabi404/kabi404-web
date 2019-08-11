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

  mounted: function () {
    this.$store.dispatch('loadEntry', this.$route.params.entry)
  }
}
</script>
