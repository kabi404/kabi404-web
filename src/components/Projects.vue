<template>
  <div>
      <div class="row justify-content-center">
          <p class="display-4 mt-5 text-center">My Projects</p>
      </div>
      <div class="row justify-content-center mb-5">
          <p class="h1 display-4 ">
              <i class="fas fa-drafting-compass"></i>
          </p>
      </div>
      <div class = "row justify-content-center mx-2 mb-5">
          <div class="col-4">
              <div class="accordion" id="accordionExample">
                  
                <div v-for="team in teams" v-bind:key="team.name">
                  <div class="card">
                      <div class="card-header" id="headingOne">
                          <h5 class="mb-0">
                              <button class="btn btn-link collapsed" type="button" data-toggle="collapse" v-bind:data-target="'#'+team.name" aria-expanded="true" v-bind:aria-controls="team.name">
                                  {{team.name}}
                              </button>
                          </h5>
                      </div>
                      <div v-bind:id="team.name" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div class="card-body" >
                              <p>
                                  {{team.description}}
                              </p>
                              <ul v-for="project in team.projects" v-bind:key="project.name">
                                <li class="ml-5">
                                    <a href="#">{{project.name}}</a>
                                </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>
          <div class="col-8">
              <div class="card text-center">
                  <div class="card-header">
                      Project category
                  </div>
                  <div class="card-body">
                      <h5 class="card-title">Project Name</h5>
                      <p class="card-text">This is the project description. This is the project description. This is the project description. This is the project description. This is the project description. This is the project description. </p>
                      <a href="#" class="h3"><i class="fab fa-github"></i></a>
                  </div>
                  <div class="card-footer text-muted">
                      state
                  </div>
              </div>
          </div>
      </div>      
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      teams: [
        {
          name: 'Own',
          description: 'These are my own projects.',
          projects: [
            {
              name: 'My Personal Web',
              readme: '',
              url:''
            },
            {
              name: 'My Home',
              readme: '',
              url:''
            },
            {
              name: 'Light Kana',
              readme: '',
              url:''
            }
          ]
        },
        {
          name: 'ArtichokeCore',
          description: 'These are my ArtichokeCore projects.',
          projects: [
            {
              name: 'My role dices',
              readme: '',
              url:''
            },
            {
              name: 'Artichoke Web',
              readme: '',
              url:''
            }
          ]
        },
        {
          name: 'HappyNuts',
          description: 'These are my Rainy Nuts projects.',
          projects: [
            {
              name: 'Save Karin',
              readme: '',
              url:''
            }
          ]
        }
      ]
    }
  }
}
</script>