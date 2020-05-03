<template>
  <div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Idioma | Language | 言語</p>
      <button class="delete" aria-label="close" @click="closeLanguage()"></button>
    </header>
    <section class="modal-card-body">
      <div class="columns">
        <div class="column">
          <a @click="setLanguage('es')">
            <div class="card">
              <div class="card-content has-text-centered">
                <p class="subtitle">
                  Español
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="column">
          <a @click="setLanguage('en')">
            <div class="card">
              <div class="card-content has-text-centered">
                <p class="subtitle">
                  English
                </p>
              </div>
            </div>
          </a>
        </div>
        <div class="column">
          <a @click="setLanguage('jp')">
            <div class="card">
              <div class="card-content has-text-centered">
                <p class="subtitle">
                  日本語
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</div>
</template>

<script>
import config from '../config'

export default {
  name: 'LanguageModal',
  methods: {
    setLanguage: function (lan) {
      config.language = lan
      this.$emit('set-lan', lan)
    },
    closeLanguage: function () {
      this.$emit('hide-lan')
    }
  }
}
</script>
