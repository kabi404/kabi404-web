<template>
  <div id="app">
    <section class="hero is-fullheight is-default is-bold">
            <div class="hero-head">
                <Navbar/>
            </div>
            <div class="hero-body">

                <router-view></router-view>

                <!-- Languages -->
                <div class="modal" v-bind:class="{'is-active': showLanModal}">
                  <div class="modal-background"></div>
                  <div class="modal-card">
                    <header class="modal-card-head">
                      <p class="modal-card-title">{{lang('LANGUAGE')}}</p>
                      <button @click="toggleLanguageModal()" class="delete" aria-label="close"></button>
                    </header>
                    <section class="modal-card-body has-text-centered">
                        <div class="control">
                            <div class="columns">
                                <div class="column">
                                    <a @click="setLan('es')">
                                        <div v-bind:class="{'has-background-grey-dark has-text-white': currentLan == 'es'}" class="box has-text-centered">
                                            <p>Español</p>
                                            <p>Spanish</p>
                                            <p>スペイン語</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="column">
                                    <a @click="setLan('en')">
                                        <div v-bind:class="{'has-background-grey-dark has-text-white': currentLan == 'en'}" class="box has-text-centered">
                                            <p>Inglés</p>
                                            <p>English</p>
                                            <p>英語</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="column">
                                    <a @click="setLan('jp')">
                                        <div v-bind:class="{'has-background-grey-dark has-text-white': currentLan == 'jp'}" class="box has-text-centered">
                                            <p>Japonés</p>
                                            <p>Japanese</p>
                                            <p>日本語</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <footer class="modal-card-foot">
                      <button @click="toggleLanguageModal()" class="button">{{lang('CLOSE')}}</button>
                    </footer>
                  </div>
                </div>
                <!-- end Language -->
            </div>
          <Footer/>
        </section>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

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
</style>

