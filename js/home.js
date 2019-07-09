const home = Vue.component('Home', {
    props: {
        currentLan: String
    },
    data: function () {
      return {
        content: {
            JAVIER_PARADA: {
                es: 'Javier Parada',
                en: 'Javier Parada',
                jp: 'パラだ葉火'
            },
            SOFTWARE_ENGINEER: {
                es: 'Ingeniero de Software y Desarrollador Full-stack ',
                en: 'Software Engineer and Full-Stack Developer',
                jp: 'ソフトウェアエンジニアとフルスタック開発者'
            }
        }
      }
    },
    methods: {
        lang: function(strId) {
            return this.content[strId][this.currentLan]
        }
    },
    mounted: function(){
        new TypeIt('#typeit', {
            startDelay: 300,
            speed: 150
          }).go()
    },
    template: 
        `
        <div class="container has-text-centered">
            <div class="columns is-vcentered is-centered">
                <div class="column is-3">
                    <figure class="image is-1by1">
                        <img src="https://avatars3.githubusercontent.com/u/19194763?s=460&v=4"
                            class="is-rounded" alt="Description">
                    </figure>
                </div>
                <div class="column is-6 is-offset-1">
                    <h1 id="typeit" class="title is-2">
                        {{ lang('JAVIER_PARADA') }}
                    </h1>
                    <h2 class="subtitle is-4">
                        {{ lang('SOFTWARE_ENGINEER') }}
                    </h2>
                    <br>
                    <div class="columns is-centered is-multiline has-text-centered">
                        <div class="column is-2">
                            <a target="_blank" href="https://github.com/kabi404"
                                class="is-size-3 has-text-grey-dark">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                        <div class="column is-2">
                            <a target="_blank" href="https://www.linkedin.com/in/kabi404/"
                                class="is-size-3 has-text-grey-dark">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                        <div class="column is-2">
                            <a target="_blank" href="https://twitter.com/kabi404"
                                class="is-size-3 has-text-grey-dark">
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
        `
})