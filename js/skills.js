const skills = Vue.component('Skills', {
    props: {
        currentLan: String
    },
    data: function () {
      return {
        content: {
            SKILLS_CARDS: {
                es: [
                  {
                    title: 'Tecnologías',
                    skills: [
                      {
                        name: 'Node.js',
                        score: 90
                      },
                      {
                        name: 'JAVA',
                        score: 100
                      },
                      {
                        name: 'Vue.js',
                        score: 90
                      },
                      {
                        name: 'NoSQL',
                        score: 80
                      },
                      {
                        name: 'SQL',
                        score: 80
                      }
                    ]
                  },{
                    title: 'Sectores',
                    skills: [
                      {
                        name: 'Ingeniería de Software',
                        score: 80
                      },
                      {
                        name: 'Desarrollo Back-end',
                        score: 90
                      },
                      {
                        name: 'Desarrollo Front-end',
                        score: 80
                      },
                      {
                        name: 'Aplicaciones móviles',
                        score: 50
                      }
                    ]
                  },
                  {
                    title: 'Idiomas',
                    skills: [
                      {
                        name: 'Español',
                        score: 100
                      },
                      {
                        name: 'Euskera',
                        score: 90
                      },
                      {
                        name: 'Inglés',
                        score: 80
                      },
                      {
                        name: 'Japonés',
                        score: 50
                      }
                    ]
                  }
                ],
                en: [
                  {
                    title: 'Technologies',
                    skills: [
                      {
                        name: 'Node.js',
                        score: 90
                      },
                      {
                        name: 'JAVA',
                        score: 100
                      },
                      {
                        name: 'Vue.js',
                        score: 90
                      },
                      {
                        name: 'NoSQL',
                        score: 80
                      },
                      {
                        name: 'SQL',
                        score: 80
                      }
                    ]
                  },{
                    title: 'Sectores',
                    skills: [
                      {
                        name: 'Ingeniería de Software',
                        score: 80
                      },
                      {
                        name: 'Desarrollo Back-end',
                        score: 90
                      },
                      {
                        name: 'Desarrollo Front-end',
                        score: 80
                      },
                      {
                        name: 'Aplicaciones móviles',
                        score: 50
                      }
                    ]
                  },
                  {
                    title: 'Languages',
                    skills: [
                      {
                        name: 'Spanish',
                        score: 100
                      },
                      {
                        name: 'Basque',
                        score: 90
                      },
                      {
                        name: 'English',
                        score: 80
                      },
                      {
                        name: 'Japanese',
                        score: 50
                      }
                    ]
                  }
                ],
                jp: [
                  {
                    title: 'Tecnologías',
                    skills: [
                      {
                        name: 'Node.js',
                        score: 90
                      },
                      {
                        name: 'JAVA',
                        score: 100
                      },
                      {
                        name: 'Vue.js',
                        score: 90
                      },
                      {
                        name: 'NoSQL',
                        score: 80
                      },
                      {
                        name: 'SQL',
                        score: 80
                      }
                    ]
                  },{
                    title: 'Sectores',
                    skills: [
                      {
                        name: 'Ingeniería de Software',
                        score: 80
                      },
                      {
                        name: 'Desarrollo Back-end',
                        score: 90
                      },
                      {
                        name: 'Desarrollo Front-end',
                        score: 80
                      },
                      {
                        name: 'Aplicaciones móviles',
                        score: 50
                      }
                    ]
                  },
                  {
                    title: 'Idiomas',
                    skills: [
                      {
                        name: 'Español',
                        score: 100
                      },
                      {
                        name: 'Euskera',
                        score: 90
                      },
                      {
                        name: 'Inglés',
                        score: 80
                      },
                      {
                        name: 'Japonés',
                        score: 50
                      }
                    ]
                  }
                ]
            }
        }
      }
    },
    methods: {
        lang: function(strId) {
            return this.content[strId][this.currentLan]
        }
    },
    template: 
        `
        <div id="skills" class="container has-text-centered">
            <div class="columns">
                <div class="column is-4" v-for="card in lang('SKILLS_CARDS')">
                    <div class="card">
                        <div class="card-content skills-content">
                            <h3 class="title is-4">{{card.title}}</h3>
                            <div class="content">
                                <article v-for="skill in card.skills" class="media">
                                    <div class="media-content">
                                        <div class="content has-text-centered">
                                            <p>
                                                <strong>{{skill.name}}</strong>
                                                <br>
                                                <progress class="progress is-info" v-bind:value="skill.score"
                                                    max="100"></progress>
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
})