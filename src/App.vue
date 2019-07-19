<template>
  <div id="app">
    <section class="hero is-fullheight is-default is-bold">
            <div class="hero-head">
                <Navbar />
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
import LanModal from './components/LanguageModal.vue'

export default {
  name: 'app',

  components: {
    Navbar,
    Footer,
    LanModal
  },

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

    currentLan: function () {
      return this.$store.state.lan
    },

    showLanModal: function () {
      return this.$store.state.showLanModal
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

