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
          <input type="radio" name="foobar">
          Español
        </label>
        <label class="radio">
          <input type="radio" name="foobar" checked>
          English
        </label>
        <label class="radio">
          <input type="radio" name="foobar">
          日本語
        </label>
      </div>
    </section>
  </div>
</div>
</template>

<script>
export default {
  name: 'LanguageModal',
  methods: {
    setLanguage: function () {

    },
    closeLanguage: function () {
      this.$emit('hide-lan')
    }
  }
}
</script>
