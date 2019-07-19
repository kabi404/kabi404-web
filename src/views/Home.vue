<template>
    <div class="container has-text-centered">
      <div class="columns is-vcentered is-centered">
          <div class="column is-3">
              <figure class="image is-1by1">
                  <img src="https://avatars3.githubusercontent.com/u/19194763?s=460&v=4"
                      class="is-rounded" alt="Description">
              </figure>
          </div>
          <div class="column is-6 is-offset-1">
              <h1 id="typeit" class="title is-2">
                  {{ lang('JAVIER_PARADA') }}
              </h1>
              <h2 class="subtitle is-4">
                  {{ lang('SOFTWARE_ENGINEER') }}
              </h2>
              <br>
              <div class="columns is-centered is-multiline has-text-centered">
                  <div class="column is-2">
                      <a target="_blank" href="https://github.com/kabi404"
                          class="is-size-3 has-text-grey-dark">
                          <font-awesome-icon :icon="['fab', 'github']"/>
                      </a>
                  </div>
                  <div class="column is-2">
                      <a target="_blank" href="https://www.linkedin.com/in/kabi404/"
                          class="is-size-3 has-text-grey-dark">
                          <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                      </a>
                  </div>
                  <div class="column is-2">
                      <a target="_blank" href="https://twitter.com/kabi404"
                          class="is-size-3 has-text-grey-dark">
                          <font-awesome-icon :icon="['fab', 'twitter']"/>
                      </a>
                  </div>
                  <div class="column is-2">
                      <a href="mailto:kabi404@outlook.com" class="is-size-3 has-text-grey-dark">
                          <font-awesome-icon :icon="['fa', 'envelope']"/>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TypeIt from 'typeit'

export default {
  name: 'home',

  methods: {
    lang: function(strId) {
      return this.$store.getters.getLanById({
        name:this.$options.name,
        id:strId,
        lan:this.currentLan
      })
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

  mounted: function(){
    new TypeIt('#typeit', {
        startDelay: 300,
        speed: 150
      }).go()
  }
}
</script>
