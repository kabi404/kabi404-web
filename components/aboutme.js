var aboutme = Vue.component('aboutme', {
    
    data: function(){
        return {
            text: {
                description: {
                    title: [
                        'Sobre mi', 'About me', '私について'
                    ],
                    content: [
                        'Hola, Soy Javi! Soy estudiante de Ingeniería de Software en la Universidad de Málaga.',
                        '',
                        ''
                    ]
                },
                hobbies: {
                    title: [
                        'Mis aficiones', 'My hobbies', '私の趣味'
                    ],
                    content: [
                        'Hola, Soy Javi! Soy estudiante de Ingeniería de Software en la Universidad de Málaga.',
                        '',
                        ''
                    ]
                },
                japan: {
                    title: [
                        'Sobre mi', 'About me', '私について'
                    ],
                    content: [
                        'Hola, Soy Javi! Soy estudiante de Ingeniería de Software en la Universidad de Málaga.',
                        '',
                        ''
                    ]
                },
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
                <div class="container">
                    <div class="columns is-7 is-variable is-centered m-t-xl">
                        <div class="column is-4">
                            <figure class="image is-3by4">
                                <img src="./img/wilson.png">
                            </figure>
                        </div>
                        <div class="column is-6 is-vertical-center">
                            <div>
                                <p class="is-size-2 has-text-right-tablet">{{text.description.title[0]}}</p>
                                <p class="is-size-5 has-text-justified">{{text.description.content[0]}}</p>
                            </div>
                        </div>
                    </div>
        
                    <div class="columns is-centered is-7 is-variable m-t-xxl">
                        <div class="column is-6 is-vertical-center">
                            <div>
                                <p class="is-size-2 has-text-left-tablet">{{text.hobbies.title[0]}}</p>
                                <p class="is-size-5 has-text-justified">{{text.hobbies.content[0]}}</p>
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
                                <p class="is-size-2 has-text-right-tablet">{{text.japan.title[0]}}</p>
                                <p class="is-size-5 has-text-justified">{{text.japan.content[0]}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
            </div> 

        `
});