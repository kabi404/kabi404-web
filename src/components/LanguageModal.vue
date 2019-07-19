<template>
  <div class="modal is-active" >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{lang('LANGUAGES')}}</p>
        <button @click="closeModal()" class="delete" aria-label="close"></button>
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
        <button @click="closeModal()" class="button">{{lang('CLOSE')}}</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lanModal',

  methods: {
    lang: function(strId) {
      return this.$store.getters.getLanById({
        name:this.$options.name,
        id:strId,
        lan:this.currentLan
      })
    },

    closeModal: function () {
      this.$store.state.showLanModal = false
    },

    setLan: function (language) {
      this.$store.state.lan = language
    }
  },

  computed: {
    currentTab: function () {
      return this.$route.name
    },

    currentLan: function () {
      return this.$store.state.lan
    }
  }
}
</script>

