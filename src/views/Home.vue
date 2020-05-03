<template>
  <div class="home">

    <profile-card
      v-on:show-lan="toggleLang()"
      v-bind:language="language"
    />
    <language-modal
      v-on:hide-lan="toggleLang()"
      v-on:set-lan="setLan($event)"
      v-if="showLan"
    />

  </div>
</template>

<script>

import ProfileCard from '../components/ProfileCard'
import LanguageModal from '../components/LanguageModal'

export default {
  name: 'Home',
  data: function () {
    return {
      showLan: false,
      language: 'en'
    }
  },
  methods: {
    toggleLang: function () {
      this.showLan = !this.showLan
    },
    setLan: function (lan) {
      this.language = lan
      this.showLan = false
    }
  },
  components: {
    profileCard: ProfileCard,
    languageModal: LanguageModal
  }
}
</script>

<style lang="sass">
  @import '@/../node_modules/bulma/bulma.sass'
</style>
