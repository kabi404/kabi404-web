<template>
  <div class="hero-foot">
      <div class="container">
          <div class="tabs is-centered">
              <ul>
                  <li><a target="_blank"
                          href="https://github.com/kabi404/kabi404.github.io">{{ lang('PAGE_HOSTED_ON_GITHUB') }}
                          &nbsp;<font-awesome-icon :icon="['fab', 'github-alt']"/></a></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'footer',

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
  }
}
</script>

