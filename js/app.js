
var app = new Vue({
    el: '#app',

    data: {
      test: 'Test Vue!',

      currentLan: 'en',

      tab: 'home',

      showLanModal: false,

      content: {
          PAGE_HOSTED_ON_GITHUB: {
            es: 'Página alojada en Github',
            en: 'Web hosted on Github',
            jp: 'GithubでホストされているWeb'
          },
          HOME: {
            es: 'Inicio',
            en: 'Home',
            jp: 'ホーム'
          },
          SKILLS: {
            es: 'Habilidades',
            en: 'Skills',
            jp: '熟練'
          },
          PROJECTS: {
            es: 'Proyectos',
            en: 'Projects',
            jp: 'プロジェクト'
          },
          LANGUAGE: {
            es: 'Idioma',
            en: 'Language',
            jp: '言語'
          },
          CLOSE: {
            es: 'Cerrar',
            en: 'Close',
            jp: '言語'
          },
      }
    },

    components: {
      projects,
      skills,
      home
    },

    methods: {
        lang: function(strId) {
            return this.content[strId][this.currentLan]
        },

        setTab: function(currentTab) {
          this.tab = currentTab
        },

        setLan: function(lan) {
          this.currentLan = lan
        },

        toggleLanguageModal: function() {
          this.showLanModal = !(this.showLanModal)
        },

        burgerToggleEventAdd: function() {
          const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
          if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
              el.addEventListener('click', () => {
              
                const target = el.dataset.target;
                const $target = document.getElementById(target)
    
                el.classList.toggle('is-active')
                $target.classList.toggle('is-active')
              })
            })
          }
        }
    },

    beforeMount: function() {
        let userLang = navigator.language || navigator.userLanguage
        if(userLang.includes('es')) {
            this.currentLan = 'es'
        } else if(userLang.includes('jp')) {
            this.currentLan = 'jp'
        } else {
            this.currentLan = 'en'
        }
    },

    mounted: function() {
      this.burgerToggleEventAdd()
    }

  })

