var app = new Vue({
    el: '#app',
    data: {
        lang: {},
        currentLang: ''
    },

    created: function () {
        if(navigator.language.includes('es'))
        {
            this.$data.currentLang = 'es';
        } else {
            this.$data.currentLang = 'en';
        }
            
        //else if(navigator.language.contains('jp'))
        //this.$data.currentLang = 'jp';      

        this.getLangData();
    },

    methods: {
        getLangData: function() {
            let $this = this;
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', './data/lang.json', true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    $this.$data.lang = JSON.parse(xobj.responseText);
                }
            };
            xobj.send();
        },

        langify: function(name) {
            let data;
            try {
                data = this.$data.lang[name][this.$data.currentLang];
            } catch(err) {
                data = ''
            }
            return data;
        }
    },

    computed: {
        
    }
})