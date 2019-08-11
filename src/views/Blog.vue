<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-8">
        <Entry v-if="entry && entry != ''"/>
      </div>
    </div>
    <div v-if="!entry || entry == ''">
      <div v-for="blogEntry in entries" :key="blogEntry.title" class="columns is-vcentered">
        <div class="column is-narrow">
          <router-link v-bind:to="'/blog/' + blogEntry.title | titleRoute" class="is-size-3">{{blogEntry.title}}</router-link>
        </div>
        <div class="column">
          <div class="tags">
            <span v-for="tag in blogEntry.tags" :key="tag" class="tag is-light">
              {{tag}}
            </span>
          </div>
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

  filters: {
    titleRoute: function(title) {
      return title.replace(' ', '-')
    }
  },

  beforeMount: function () {
    this.$store.dispatch('loadBlogReferences')
  }
}
</script>
