var skills = Vue.component('skills', {
    
    data: function(){
        return {
            text: {
                h1: ['Mis Habilidades', 'My Skills', ''],
                techs: {
                    title: ['Tecnologías', 'Technologies', ''],
                    items: [
                        ['Node.js', 'Electron', 'Vue.js', 'Bootstrap', 'Bulma', 'JSP', 'JSF'],
                        ['Node.js', 'Electron', 'Vue.js', 'Bootstrap', 'Bulma', 'JSP', 'JSF'],
                        ['Node.js', 'Electron', 'Vue.js', 'Bootstrap', 'Bulma', 'JSP', 'JSF']
                    ]
                },
                code: {
                    title: ['Código', 'Code', ''],
                    items: [
                        ['JAVA', 'JavaScript', 'C#', 'PHP', 'C', 'MongoDB', 'MySQL'],
                        ['JAVA', 'JavaScript', 'C#', 'PHP', 'C', 'MongoDB', 'MySQL'],
                        ['JAVA', 'JavaScript', 'C#', 'PHP', 'C', 'MongoDB', 'MySQL']
                    ]
                },
                languages: {
                    title: ['Idiomas', 'Languages', ''],
                    items: [
                        ['Español', 'Inglés', 'Japonés', 'Euskera'],
                        ['Spanish', 'English', 'Japanese', 'Euskera'],
                        ['スペイン語', '英語', '日本語', 'エウスケラ']
                    ]
                }
            }
        }
    },

    computed: {

    },

    methods: {

    },

    filters: {

    },

    template:
`

    <div>

        <p class="has-text-centered is-size-2 m-t-xl">{{text.h1[0]}}</p>

        <div class="columns is-centered m-t-xs">
    
            <div class="column is-3">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                      <div class="content">
                        <p class="title has-text-centered">
                            <i class="fas fa-terminal"></i>
                        </p>
                        <p class="subtitle has-text-centered">{{text.techs.title[0]}}</p>
                        <hr/>
                        <div class="content has-text-centered">
                          <p v-for="tech in text.techs.items[0]">{{tech}}</p>
                        </div>
                      </div>
                    </article>
                </div>
            </div>
    
    
            <div class="column is-3">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                          <div class="content">
                            <p class="title has-text-centered">
                                <i class="fas fa-laptop-code"></i>
                            </p>
                            <p class="subtitle has-text-centered">{{text.code.title[0]}}</p>
                            <hr/>
                            <div class="content">
                                <div class="content has-text-centered">
                                    <p v-for="lan in text.code.items[0]">{{lan}}</p>
                                </div>
                            </div>
                          </div>
                        </article>
                    </div>
                </div>


            <div class="column is-3">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                      <div class="content">
                        <p class="title has-text-centered">
                            <i class="fas fa-language"></i>
                        </p>
                        <p class="subtitle has-text-centered">{{text.languages.title[0]}}</p>
                        <hr/>
                        <div class="content">
                            <div class="content has-text-centered">
                                <p v-for="lan in text.languages.items[0]">{{lan}}</p>
                            </div>
                        </div>
                      </div>
                    </article>
                </div>
            </div>

        </div>
    </div>

`
});