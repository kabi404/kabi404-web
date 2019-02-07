var app = new Vue({
    el: '#app',
    data: {
        lang: {},
        currentLang: 'en',

        pageclip: {
            api: '7pTGdOe8zE2hqcQtLCzH5mDTQTOibBRb',
            formNAme: 'contact-form',
            data: {
                email: '',
                name: '',
                message: ''
            }
        },

        const: {},

        toggler: {
            burgerToggler: false,
            menuToggler: false,
            radio: 'en',
            showSuccessSubmit: false,
            showErrSubmit: false
        }
    },

    created: function () {
        const navLang = navigator.language || navigator.userLanguage;
        if(navLang.includes('es'))
        {
            this.changeLang('es');
        } else if(navLang.includes('jp')){
            this.changeLang('jp');
        } else {
            this.changeLang('en');
        }   

        this.getLangData();

        this.getConstData();
    },

    methods: {
        sendForm: function () {
            var $this = this;

              if(this.$data.data.email == '' || this.$data.data.message == '' || this.$data.data.name == '') {
                $this.$data.toggler.showErrSubmit = true;
              } else {
                Pageclip.send(this.$data.pageclip.api, this.$data.pageclip.formNAme, this.$data.pageclip.data, function (error, response) {
                    if(error) {
                        $this.$data.toggler.showErrSubmit = true;
                    } else {
                        $this.$data.toggler.showSuccessSubmit = true;
                        $this.$data.pageclip.data = {
                            email: '',
                            name: '',
                            message: ''
                        }
                    }
                  });
              }
        },

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

        getConstData: function() {
            let $this = this;
            var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
            xobj.open('GET', './data/const.json', true);
            xobj.onreadystatechange = function () {
                if (xobj.readyState == 4 && xobj.status == "200") {
                    $this.$data.const = JSON.parse(xobj.responseText);
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

        closeNotifications: function() {
            this.$data.toggler.showSuccessSubmit = false;
            this.$data.toggler.showErrSubmit = false;
        },

        changeLang: function(langId) {
            this.$data.currentLang = langId;
            this.$data.toggler.radio = langId;
        },

        cvLink: function(currentLang) {
            var link;
            try {
                link = this.$data.const.cvLink[currentLang];
            } catch(err) {
                link = '';
            }
            return link;
        }
        
    },

    computed: {
        
    }
})