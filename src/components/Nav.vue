<template>

    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <p class="text-white h1 display-1 my-5 text-center">
                <i class="fab fa-firefox"></i>
            </p>

            <a class="nav-link active text-white h2" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                <i class="fab fa-fort-awesome"></i>
            </a>
            <a class="nav-link text-white h2" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                <i class="fas fa-user-astronaut"></i>
            </a>
            <a class="nav-link text-white h2" id="v-pills-projects-tab" data-toggle="pill" href="#v-pills-projects" role="tab" aria-controls="v-pills-projects" aria-selected="false">
                <i class="fas fa-drafting-compass"></i>
            </a>
            <a class="nav-link text-white h2" id="v-pills-blog-tab" data-toggle="pill" href="#v-pills-blog" role="tab" aria-controls="v-pills-blog" aria-selected="false">
                <i class="fas fa-feather-alt"></i>
            </a> 
    </div>

</template>


<script>
export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>