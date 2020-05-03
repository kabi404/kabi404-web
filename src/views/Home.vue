<template>
  <div class="home">

    <profile-card v-on:show-lan="toggleLang()"/>
    <language-modal v-on:hide-lan="toggleLang()" v-if="showLan"/>

  </div>
</template>

<script>

import ProfileCard from '../components/ProfileCard'
import LanguageModal from '../components/LanguageModal'

export default {
  name: 'Home',
  data: function () {
    return {
      showLan: false
    }
  },
  methods: {
    toggleLang: function () {
      this.showLan = !this.showLan
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
