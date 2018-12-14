var app = new Vue({
    el: '#app',
    data: {
        lang: {},
        currentLang: 'en',

        toggler: {
            burgerToggler: false,
            menuToggler: false
        }
    },

    created: function () {
        const navLang = navigator.language || navigator.userLanguage;
        if(navLang.includes('es'))
        {
            this.$data.currentLang = 'es';
        } else if(navLang.includes('jp')){
            this.$data.currentLang = 'jp';
        } else {
            this.$data.currentLang = 'en';
        }   

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
        },

        toggleBurger: function() {
            this.$data.toggler.burgerToggler = !this.$data.toggler.burgerToggler;
            this.$data.toggler.menuToggler = !this.$data.toggler.menuToggler;
        },

        changeLang: function(langId) {
            this.$data.currentLang = langId;
        }
        
    },

    computed: {
        
    }
})