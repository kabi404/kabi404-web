<template>
  <div class="home">

    <profile-card/>

  </div>
</template>

<script>

import ProfileCard from '../components/ProfileCard'

export default {
  name: 'Home',
  data: function () {
    return {

    }
  },
  methods: {
    lang: function () {

    }
  },
  components: {
    profileCard: ProfileCard
  }
}
</script>

<style lang="sass">
  @import '@/../node_modules/bulma/bulma.sass'
</style>
