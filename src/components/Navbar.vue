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
                          <li v-bind:class="{'is-active': currentTab == 'blog'}">
                              <router-link to="/blog">{{ lang('BLOG') }}</router-link>
                          </li>
                          <li>
                              <a @click="showLanModal()">{{ lang('LANGUAGE') }}</a>
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
    },

    showLanModal: function () {
      this.$store.state.showLanModal = true
    },

    burgerToggleEventAdd: function() {
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {

            const target = el.dataset.target;
            const $target = document.getElementById(target);

            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
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
    this.burgerToggleEventAdd()
  }
}
</script>

