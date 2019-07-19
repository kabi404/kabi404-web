<template>
  <div class="card large">
      <div class="card-image">
          <figure class="image">
              <img v-bind:src="screenshot"
                  alt="Image">
          </figure>
      </div>
      <div class="card-content">
          <div class="media">
              <div class="media-left">
                  <figure class="image is-96x96">
                      <img v-bind:src="img" alt="Image">
                  </figure>
              </div>
              <div class="media-content">
                  <p class="title is-4 no-padding">{{title}}</p>
                  <p class="subtitle is-6">{{subtitle}}</p>
              </div>
          </div>
          <div class="content has-text-justified">
              {{description}}
              <div class="background-icon"><span class="icon-twitter"></span></div>
          </div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span>
              <a target="_blank" v-bind:href="downloadLink">
                  Web
              </a>
          </span>
        </p>
        <p class="card-footer-item">
          <span>
            <a target="_blank" v-bind:href="repoLink">
              Source Code
            </a>
          </span>
        </p>
      </footer>
  </div>
</template>

<script>
export default {
  name: 'project-card',

  props: {
    screenshot: String,
    img: String,
    title: String,
    subtitle: String,
    description: String,
    downloadLink: String,
    repoLink: String
  }
}
</script>
