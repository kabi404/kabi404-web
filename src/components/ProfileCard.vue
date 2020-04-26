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
                      <a>{{ lang('LANGUAGE') | capitalize}}</a>
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
              <h1 id="typeit" class="title is-2">
                {{ lang('JAVIER PARADA') | capitalizeAll }}
              </h1>
              <h2 class="subtitle is-4">
                {{ lang('SOFTWARE ENGINEER') | capitalize }}
              </h2>
              <br>
              <div class="columns is-centered is-multiline has-text-centered">
                <div class="column is-2">
                  <a target="_blank" href="https://github.com/kabi404" class="is-size-3 has-text-grey-dark">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
                <div class="column is-2">
                  <a target="_blank" href="https://www.linkedin.com/in/kabi404/" class="is-size-3 has-text-grey-dark">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <div class="column is-2">
                  <a target="_blank" href="https://twitter.com/kabi404" class="is-size-3 has-text-grey-dark">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
                <div class="column is-2">
                  <a href="mailto:kabi404@outlook.com" class="is-size-3 has-text-grey-dark">
                    <i class="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End main view -->

      </div>
      <!-- Continue -->
      <div class="hero-foot">
        <div class="container">
          <div class="tabs is-centered">
            <ul>
              <li>
                <a href="#skills">
                  <i class="fas fa-arrow-down"></i>
                  &nbsp;
                  {{ lang('MORE ABOUT ME') | capitalize }}
                  &nbsp;
                  <i class="fas fa-arrow-down"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End continue -->
    </section>
    <!-- End Hero -->
</template>

<script>

export default {
  name: 'ProfileCard',
  data: function () {
    return {

    }
  },
  methods: {
    lang: function () {

    }
  }
}
</script>

<style lang="sass">
  img
    -webkit-filter: grayscale(30%)
    filter: grayscale(30%)
</style>
