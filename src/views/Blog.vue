<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8">
        <Entry v-if="entry"/>
      </div>
    </div>
    <div v-if="!entry">

    </div>
  </div>
</template>

<script>
import Entry from '@/components/Entry'

export default {
  name: 'blog',

  components: {
    Entry
  },

  data: function () {
    return {

    }
  },

  computed: {
    currentTab: function () {
      return this.$route.name
    },

    currentLan: function() {
      return this.$store.state.lan
    },

    entry: function () {
      return this.$route.params
    }
  }
}
</script>
