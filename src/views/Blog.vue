<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8">
        <Entry v-if="entry && entry != ''"/>
      </div>
    </div>
    <div v-if="!entry || entry == ''">
      <div v-for="blogEntry in entries" :key="blogEntry.title" class="columns">
        <div class="column is-8">
          <p class="is-size-3">{{blogEntry}}</p>
        </div>
      </div>
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
      return this.$route.params.entry
    },

    entries: function () {
      return this.$store.getters.entries
    }
  },

  beforeMount: function () {
    this.$store.dispatch('loadBlogReferences')
  }
}
</script>
