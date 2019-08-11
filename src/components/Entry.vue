<template>
<div>
  <vue-simple-markdown :source="entry"/>
</div>
</template>

<script>

export default {
  name: 'entry',

  computed: {
    entry: function () {
      return this.$store.getters.entry
    },

    currentTab: function () {
      return this.$route.name
    },

    currentLan: function() {
      return this.$store.state.lan
    }
  },

  beforeMount: function () {
    this.$store.dispatch('loadEntry', this.$route.params.entry)
  }
}
</script>
