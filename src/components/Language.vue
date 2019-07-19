<template>
  <div class="modal is-active" >
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
</template>
