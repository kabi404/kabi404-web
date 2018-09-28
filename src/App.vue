<template>
  <div id="app">

    <div class="container-fluid">
      <div class="row justify-content-center">
          <div class="col-sm-2 text-center bg-dark">   
            <Nav/>
          </div>
          <div class="col-10">

            <div class="tab-content" id="v-pills-tabContent">
              <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <Home/>
              </div>
              <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                  <About/>
              </div>
              <div class="tab-pane fade" id="v-pills-projects" role="tabpanel" aria-labelledby="v-pills-projects-tab">
                  <Projects/>
              </div>
              <div class="tab-pane fade" id="v-pills-blog" role="tabpanel" aria-labelledby="v-pills-blog-tab">
                  <Blog/>
              </div>
            </div>

          </div>
      </div>
    </div>

    <Footer/>

  </div>
</template>

<script>

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';

export default {
  name: 'App',
  components: {
    Footer,
    Nav,
    Home,
    About,
    Projects,
    Blog
  }
}

</script>
