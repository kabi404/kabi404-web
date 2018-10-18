var aboutme = Vue.component('aboutme', {
    
    data: function(){
        return {
            text: {
                description: [
                    'Hola, Soy Javi! Soy estudiante de Ingeniería de Software en la Universidad de Málaga.',
                    '',
                    ''
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
        <div class="container">
            <div class="columns is-centered m-t-xl m-b-xl">
                <div class="column is-4">
                    <figure class="image is-3by4">
                        <img src="./img/wilson.png">
                    </figure>
                </div>
                <div class="column is-6 is-vertical-center">
                    <div>
                        <p class="is-size-2 has-text-right-tablet">About me</p>
                        <p class="is-size-5 has-text-justified">{{text.description[0]}}</p>
                    </div>
                </div>
            </div>

            <div class="columns is-centered m-t-xxl m-b-xl">
                <div class="column is-6 is-vertical-center">
                    <div>
                        <p class="is-size-2 has-text-left-tablet">About me</p>
                        <p class="is-size-5 has-text-justified">{{text.description[0]}}</p>
                    </div>
                </div>
                <div class="column is-4">
                    <figure class="image is-1by1">
                        <img src="./img/mozilla.png">
                    </figure>
                </div>
            </div>
        </div>
            
    </div> 

`
});