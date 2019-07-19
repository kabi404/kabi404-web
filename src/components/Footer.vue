<template>
  <div class="hero-foot">
      <div class="container">
          <div class="tabs is-centered">
              <ul>
                  <li><a target="_blank"
                          href="https://github.com/kabi404/kabi404.github.io">{{ lang('PAGE_HOSTED_ON_GITHUB') }}
                          &nbsp;<i class="fab fa-github-alt"></i></a></li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'footer',

  methods: {
    lang: function(strId) {
      return 'miau'
    }
  }
}
</script>

