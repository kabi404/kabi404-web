var skills = Vue.component('skills', {
    
    data: function(){
        return {
            text: {
                techs: [
                    ['Node.js', 'Electron', 'Vue.js', 'Bootstrap', 'Bulma', 'JSP', 'JSF'],
                    ['Node.js', 'Electron', 'Vue.js', 'Bootstrap', 'Bulma', 'JSP', 'JSF']
                    ['Node.js', 'Electron', 'Vue.js', 'Bootstrap', 'Bulma', 'JSP', 'JSF'],
                ],
                programmingLanguages: [
                    ['JAVA', 'JavaScript', 'C#', 'PHP', 'C'],
                    ['JAVA', 'JavaScript', 'C#', 'PHP', 'C']
                    ['JAVA', 'JavaScript', 'C#', 'PHP', 'C'],
                ],
                languages: [
                    ['Español', 'Inglés', 'Japonés'],
                    ['Spanish', 'English', 'Japanese'],
                    ['スペイン語', '英語', '日本語']
                ]
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

        <p class="has-text-centered is-size-2 m-t-xl">My skills</p>

        <div class="columns is-centered m-t-xs">
    
            <div class="column is-3">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                      <div class="content">
                        <p class="title has-text-centered">
                            <i class="fas fa-terminal"></i>
                        </p>
                        <p class="subtitle has-text-centered">Technologies</p>
                        <hr/>
                        <div class="content has-text-centered">
                          <p v-for="tech in text.techs[0]">{{tech}}</p>
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
                            <p class="subtitle has-text-centered">Programming Languages</p>
                            <hr/>
                            <div class="content">
                                <div class="content has-text-centered">
                                    <p v-for="lan in text.programmingLanguages[0]">{{lan}}</p>
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
                        <p class="subtitle has-text-centered">Languages</p>
                        <hr/>
                        <div class="content">
                            <div class="content has-text-centered">
                                <p v-for="lan in text.languages[0]">{{lan}}</p>
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