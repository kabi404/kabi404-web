const projects = Vue.component('Projects', {
    props: {
        currentLan: String
    },
    data: function () {
      return {
        content: {
            PROJECTS_CARDS: {
                es: [
                  {
                    title: 'Kanjinary',
                    subtitle: 'Javier Parada',
                    description: 'Aplicación web y base de datos para estudiar kanjis japoneses en el orden de estudio japonés. Datos obtenidos de apuntes de la Escuela Oficial de Idiomas de Málaga.',
                    projectImg: './assets/img/kanjinary.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/kanjinary/',
                    repoLink: 'https://github.com/kabi404/kanjinary'
                  },{
                    title: 'PPCE',
                    subtitle: 'Javier Parada',
                    description: 'Plataforma de Prevención y Control de Emergencias. Trabajo de final de grado en la Universidad de Málaga en el grado de Ingeniería del Software.',
                    projectImg: './assets/img/ppce.png',
                    orgImg: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Universidad_de_Málaga.jpg',
                    downloadLink: 'http://www.kabi404.dev/PPCE/',
                    repoLink: 'https://github.com/kabi404/PPCE'
                  },{
                    title: 'Kanami',
                    subtitle: 'Javier Parada',
                    description: 'Aplicación web y de escritorio minimalista para aprender los silabarios japoneses Hiragana y Katakana. Una sola compilación para generar ambas aplicaciones.',
                    projectImg: './assets/img/kanami.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/Kanami/',
                    repoLink: 'https://github.com/kabi404/Kanami'
                  },{
                    title: 'Mikana',
                    subtitle: 'ArtichokeCore',
                    description: 'Aplicación móvil nativa Android para aprender los silabarios japoneses Hiragana y Katakana.',
                    projectImg: './assets/img/mikana.png',
                    orgImg: 'https://avatars2.githubusercontent.com/u/35332682?s=200&v=4',
                    downloadLink: 'https://play.google.com/store/apps/details?id=com.artichokecore.mikana&hl=es',
                    repoLink: 'https://github.com/kabi404/Kanami'
                  },{
                    title: 'Joseto',
                    subtitle: 'Javier Parada',
                    description: 'Bot de Discord modular al que introducirle facilmente comandos y diversas funcionalidades.',
                    projectImg: './assets/img/joseto.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/Joseto/',
                    repoLink: 'https://github.com/kabi404/Joseto'
                  }
                ],
                en: [
                  {
                    title: 'Kanjinary',
                    subtitle: 'Javier Parada',
                    description: 'Web application and database to study Japanese kanjis in order of Japanese study. Data obtained from notes of the Official School of Languages of Malaga.',
                    projectImg: './assets/img/kanjinary.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/kanjinary/',
                    repoLink: 'https://github.com/kabi404/kanjinary'
                  },{
                    title: 'PPCE',
                    subtitle: 'Javier Parada',
                    description: 'Platform for Prevention and Control of Emergencies. Final degree project at the University of Málaga in the Software Engineering degree.',
                    projectImg: './assets/img/ppce.png',
                    orgImg: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Universidad_de_Málaga.jpg',
                    downloadLink: 'http://www.kabi404.dev/PPCE/',
                    repoLink: 'https://github.com/kabi404/PPCE'
                  },{
                    title: 'Kanami',
                    subtitle: 'Javier Parada',
                    description: 'Minimalist web application and desktop app to learn Japanese syllabaries Hiragana and Katakana. A single compilation to generate both applications.',
                    projectImg: './assets/img/kanami.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/Kanami/',
                    repoLink: 'https://github.com/kabi404/Kanami'
                  },{
                    title: 'Mikana',
                    subtitle: 'ArtichokeCore',
                    description: 'Native Android mobile app to learn Japanese syllabaries Hiragana and Katakana.',
                    projectImg: './assets/img/mikana.png',
                    orgImg: 'https://avatars2.githubusercontent.com/u/35332682?s=200&v=4',
                    downloadLink: 'https://play.google.com/store/apps/details?id=com.artichokecore.mikana&hl=es',
                    repoLink: 'https://github.com/kabi404/Kanami'
                  },{
                    title: 'Joseto',
                    subtitle: 'Javier Parada',
                    description: 'Discord modular Bot with different utilities for different purposes.',
                    projectImg: './assets/img/joseto.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/Joseto/',
                    repoLink: 'https://github.com/kabi404/Joseto'
                  }
                ],
                jp: [
                  {
                    title: 'Kanjinary',
                    subtitle: 'Javier Parada',
                    description: 'Aplicación web y base de datos para estudiar kanjis japoneses en el orden de estudio japonés. Datos obtenidos de apuntes de la Escuela Oficial de Idiomas de Málaga.',
                    projectImg: './assets/img/kanjinary.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/kanjinary/',
                    repoLink: 'https://github.com/kabi404/kanjinary'
                  },{
                    title: 'PPCE',
                    subtitle: 'Javier Parada',
                    description: 'Plataforma de Prevención y Control de Emergencias. Trabajo de final de grado en la Universidad de Málaga en el grado de Ingeniería del Software.',
                    projectImg: './assets/img/ppce.png',
                    orgImg: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Universidad_de_Málaga.jpg',
                    downloadLink: 'http://www.kabi404.dev/PPCE/',
                    repoLink: 'https://github.com/kabi404/PPCE'
                  },{
                    title: 'Kanami',
                    subtitle: 'Javier Parada',
                    description: 'Aplicación web y de escritorio minimalista para aprender los silabarios japoneses Hiragana y Katakana. Una sola compilación para generar ambas aplicaciones.',
                    projectImg: './assets/img/kanami.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/Kanami/',
                    repoLink: 'https://github.com/kabi404/Kanami'
                  },{
                    title: 'Mikana',
                    subtitle: 'ArtichokeCore',
                    description: 'Aplicación móvil nativa Android para aprender los silabarios japoneses Hiragana y Katakana.',
                    projectImg: './assets/img/mikana.png',
                    orgImg: 'https://avatars2.githubusercontent.com/u/35332682?s=200&v=4',
                    downloadLink: 'https://play.google.com/store/apps/details?id=com.artichokecore.mikana&hl=es',
                    repoLink: 'https://github.com/kabi404/Kanami'
                  },{
                    title: 'Joseto',
                    subtitle: 'Javier Parada',
                    description: 'Bot de Discord modular al que introducirle facilmente comandos y diversas funcionalidades.',
                    projectImg: './assets/img/joseto.png',
                    orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                    downloadLink: 'https://www.kabi404.dev/Joseto/',
                    repoLink: 'https://github.com/kabi404/Joseto'
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
        <div class="container has-text-centered">
            <div class="columns is-multiline">
                <div class="column is-one-third" v-for="project in lang('PROJECTS_CARDS')">
                    <div class="card large">
                        <div class="card-image">
                            <figure class="image">
                                <img v-bind:src="project.projectImg"
                                    alt="Image">
                            </figure>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-96x96">
                                        <img v-bind:src="project.orgImg" alt="Image">
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4 no-padding">{{project.title}}</p>
                                    <p class="subtitle is-6">{{project.subtitle}}</p>
                                </div>
                            </div>
                            <div class="content has-text-justified">
                                {{project.description}}
                                <div class="background-icon"><span class="icon-twitter"></span></div>
                            </div>
                        </div>
                        <footer class="card-footer">
                          <p class="card-footer-item">
                            <span>
                                <a target="_blank" v-bind:href="project.downloadLink">
                                    Web
                                </a>
                            </span>
                          </p>
                          <p class="card-footer-item">
                            <span>
                              <a target="_blank" v-bind:href="project.repoLink">
                                Source Code
                              </a>
                            </span>
                          </p>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
        `
})