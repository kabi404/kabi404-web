<template>
  <footer class="container-fluid py-5 bg-dark">
    <div class="row justify-content-around ml-auto flex-column flex-md-row align-items-center">
        <div class="col-3 justify-content-center text-center my-3">
            <a v-bind:href="mail" class="text-white h1" target="_blank" rel="noopener noreferrer">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
        <div class="col-3 justify-content-center text-center my-3">
            <a v-bind:href="twitter" class="text-white h1" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
        <div class="col-3 justify-content-center text-center my-3">
            <a v-bind:href="linkedin" class="text-white h1" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-linkedin-in"></i>
            </a>
        </div>
        <div class="col-3 justify-content-center text-center my-3">
            <a v-bind:href="github" class="text-white h1" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      mail: 'mailto:' + 'kabi404@outlook.com',
      twitter: 'https://twitter.com/' + 'kabi404',
      linkedin: 'https://www.linkedin.com/in/' + 'kabi404/',
      github: 'https://github.com/' + 'kabi404'
    }
  }
}
</script>
