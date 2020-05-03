<template>
  <!-- Hero -->
    <section class="hero is-fullheight is-default is-bold">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <span class="navbar-burger burger" data-target="navbarMenu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>

            <!-- Navbar -->
            <div id="navbarMenu" class="navbar-menu">
              <div class="navbar-end">
                <div class="tabs is-right">
                  <ul>
                    <li @click="showLanModal()">
                      <a class="is-size-4">
                        <font-awesome-icon icon="language"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <!-- End navbar -->
          </div>
        </nav>
      </div>
      <div class="hero-body">

        <!-- MainView -->
        <div class="container has-text-centered">
          <div class="columns is-vcentered is-centered">
            <div class="column is-3">
              <transition name="fade" appear>
                <figure class="image is-1by1">
                  <img src="https://avatars3.githubusercontent.com/u/19194763?s=460&v=4" class="is-rounded"
                    alt="Description">
                </figure>
              </transition>
            </div>
            <div class="column is-6 is-offset-1">
              <h1 id="typeit" class="title is-2"></h1>
              <h2 class="subtitle is-4">
                {{ translate('SOFTWARE ENGINEER', language) | capitalize }}
              </h2>
              <br>
              <div class="columns is-centered is-multiline has-text-centered">
                <div class="column is-2">
                  <a target="_blank" href="https://github.com/habinari" class="is-size-3 has-text-grey-dark">
                    <font-awesome-icon :icon="['fab', 'github']"/>
                  </a>
                </div>
                <div class="column is-2">
                  <a target="_blank" href="https://www.linkedin.com/in/javier-parada/" class="is-size-3 has-text-grey-dark">
                    <font-awesome-icon :icon="['fab', 'linkedin']"/>
                  </a>
                </div>
                <div class="column is-2">
                  <a target="_blank" href="https://twitter.com/habinari" class="is-size-3 has-text-grey-dark">
                    <font-awesome-icon :icon="['fab', 'twitter']"/>
                  </a>
                </div>
                <div class="column is-2">
                  <a href="mailto:javierparada@inaricore.com" class="is-size-3 has-text-grey-dark">
                    <font-awesome-icon icon="envelope"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End main view -->

      </div>
    </section>
    <!-- End Hero -->
</template>

<script>
import TypeIt from 'typeit'
import translate from '../translate'

export default {
  name: 'ProfileCard',
  data: function () {
    return {
      typeIt: null
    }
  },
  props: {
    language: String
  },
  methods: {
    showLanModal: function () {
      this.$emit('show-lan')
    },
    translate,
    type: function () {
      const first = this.language === 'jp' ? 'es' : 'jp'
      const second = this.language
      if (this.typeIt) {
        this.typeIt
          .reset()
          .destroy()
      }

      this.typeIt = new TypeIt('#typeit', {
        startDelay: 300,
        speed: 150
      })

      this.typeIt
        .type(this.translate('JAVIER PARADA', first))
        .pause(1500)
        .delete()
        .type(this.translate('JAVIER PARADA', second))
        .go()
    }
  },
  watch: {
    language: function () {
      this.type()
    }
  },
  mounted: async function () {
    this.type()
  }
}
</script>

<style lang="sass">
  img
    -webkit-filter: grayscale(30%)
    filter: grayscale(30%)
</style>
