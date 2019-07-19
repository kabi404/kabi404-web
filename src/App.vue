<template>
  <div id="app">
    <section class="hero is-fullheight is-default is-bold">
            <div class="hero-head">
                <Navbar/>
            </div>
            <div class="hero-body">
                <router-view></router-view>
                <LanModal v-if="showLanModal"/>
            </div>
          <Footer/>
        </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import LanModal from './components/Language.vue'

export default {
  name: 'app',

  components: {
    Navbar,
    Footer
  },

  data: function () {
    return {
      showLanModal: false
    }
  },

  methods: {
    lang: function(strId) {
      return 'miau'
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

<style lang="sass">
  @import '/../node_modules/bulma/bulma.sass'
  img
    -webkit-filter: grayscale(30%)
    filter: grayscale(30%)
</style>

