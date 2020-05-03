<template>
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Change language</p>
      <button class="delete" aria-label="close" @click="closeLanguage()"></button>
    </header>
    <section class="modal-card-body">
      <div class="control">
        <label class="radio">
          <input type="radio" value="es" v-model="lan">
          Español
        </label>
        <label class="radio">
          <input type="radio" value="en" v-model="lan">
          English
        </label>
        <label class="radio">
          <input type="radio" value="jp" v-model="lan">
          日本語
        </label>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button @click="setLanguage()" class="button is-success">Save</button>
    </footer>
  </div>
</div>
</template>

<script>
import config from '../config'

export default {
  name: 'LanguageModal',
  props: {
    language: String
  },
  data: function () {
    return {
      lan: this.language
    }
  },
  methods: {
    setLanguage: function () {
      config.language = this.lan
      this.$emit('set-lan', this.lan)
    },
    closeLanguage: function () {
      this.$emit('hide-lan')
    }
  }
}
</script>
