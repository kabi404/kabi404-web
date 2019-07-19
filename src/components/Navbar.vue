<template>
  <nav class="navbar">
      <div class="container">
          <div class="navbar-brand">
              <a class="navbar-item is-size-2">
                  <i class="fab fa-firefox"></i>
              </a>
              <span class="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
              </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                  <div class="tabs is-right">
                      <ul>
                          <li v-bind:class="{'is-active': currentTab == 'home'}">
                              <router-link to="/">{{ lang('HOME') }}</router-link>
                          </li>
                          <li v-bind:class="{'is-active': currentTab == 'skills'}">
                              <router-link to="/skills">{{ lang('SKILLS') }}</router-link>
                          </li>
                          <li v-bind:class="{'is-active': currentTab == 'projects'}">
                              <router-link to="/projects">{{ lang('PROJECTS') }}</router-link>
                          </li>
                          <li @click="toggleLanguageModal()">
                              <router-link to="">{{ lang('LANGUAGE') }}</router-link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: 'navbar',

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

