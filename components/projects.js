var projects = Vue.component('projects', {
    
    data: function(){
        return {
            text: {
                
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
        <p class="has-text-centered is-size-2 m-t-xl m-b-xl">My Projects</p>
        <div class="columns is-centered">
            <div class="column is-3">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                      <div class="content">
                        <p class="title has-text-centered">
                            <i class="fas fa-terminal"></i>
                        </p>
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                            <p>Lorem ipsum dolor sit amet.</p>
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
                            <p class="subtitle">With even more content</p>
                            <div class="content">
                                <p>Lorem ipsum dolor sit amet.</p>
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
                        <p class="subtitle">With even more content</p>
                        <div class="content">
                          <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                      </div>
                    </article>
                </div>
            </div>
        </div>
    </div>

`
});