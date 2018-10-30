var aboutme = Vue.component('aboutme', {
    props: ['lang'],
    
    data: function(){
        return {
            text: {
                description: {
                    title: [
                        'Sobre mi', 'About me', '私について'
                    ],
                    content: [
                        'Hola, Soy Javi! Soy estudiante de Ingeniería de Software en la Universidad y soy Desarrollador Software. Me encanta la programación, la tecnología y en especial la Inteligencia Artificial. También tengo interés por otras disciplinas como la economía y la filosofía.',
                        '',
                        ''
                    ]
                },
                hobbies: {
                    title: [
                        'Mis aficiones', 'My hobbies', '私の趣味'
                    ],
                    content: [
                        'Entre algunas de mis aficiones se encuentran los videojuegos, especialmente de género indie, la música y el cine de terror. También me encantan los zorros y todo lo que tenga que ver con ellos.',
                        '',
                        ''
                    ]
                },
                japan: {
                    title: [
                        'Sobre mi', 'About me', '私について'
                    ],
                    content: [
                        'Soy un amante de la cultura japonesa, su historia y su idioma. Actualmente tambien estudio japonés en la Escuela Oficial de Idiomas.',
                        '',
                        ''
                    ]
                },
            },
            lan: this.lang
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
                <div class="container">
                    <div class="columns is-7 is-variable is-centered m-t-xxl">
                        <div class="column is-4">
                            <figure class="image is-3by4">
                                <img src="./img/wilson.png">
                            </figure>
                        </div>
                        <div class="column is-6 is-vertical-center">
                            <div>
                                <p class="is-size-2 has-text-right-tablet m-b-md">{{text.description.title[lan]}}</p>
                                <p class="is-size-5 has-text-justified">{{text.description.content[lan]}}</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="columns is-centered is-7 is-variable m-t-xxl">
                        <div class="column is-6 is-vertical-center">
                            <div>
                                <p class="is-size-2 has-text-left-tablet m-b-md">{{text.hobbies.title[lan]}}</p>
                                <p class="is-size-5 has-text-justified">{{text.hobbies.content[lan]}}</p>
                            </div>
                        </div>
                        <div class="column is-4">
                            <figure class="image is-1by1">
                                <img src="./img/mozilla.png">
                            </figure>
                        </div>
                    </div>
        
                    <div class="columns is-7 is-variable is-centered m-t-xxl">
                        <div class="column is-4">
                            <figure class="image is-3by4">
                                <img src="./img/nihon.jpg">
                            </figure>
                        </div>
                        <div class="column is-6 is-vertical-center">
                            <div>
                                <p class="is-size-2 has-text-right-tablet m-b-md">{{text.japan.title[lan]}}</p>
                                <p class="is-size-5 has-text-justified">{{text.japan.content[lan]}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div> 

        `
});