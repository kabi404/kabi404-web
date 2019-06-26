
const TABS = {
  HOME: 'home',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  LANGUAGE: 'lan'
}

var app = new Vue({
    el: '#app',

    data: {
      test: 'Test Vue!',

      currentLan: 'en',

      tab: 'home',

      content: {
          JAVIER_PARADA: {
            es: 'Javier Parada',
            en: 'Javier Parada',
            jp: 'パラだ葉火'
          },
          SOFTWARE_ENGINEER: {
            es: 'Ingeniero de Software y Desarrollador Full-stack ',
            en: 'Software Engineer and Full-Stack Developer',
            jp: 'ソフトウェアエンジニアとフルスタック開発者'
          },
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
            es: 'Projects',
            en: 'Web hosted on Github',
            jp: 'プロジェクト'
          },
          LANGUAGE: {
            es: 'Language',
            en: 'Web hosted on Github',
            jp: '言語'
          }
      }
    },

    methods: {
        lang: function(strId) {
            return this.content[strId][this.currentLan]
        },

        setTab: function(currentTab) {
          this.tab = currentTab
        },

        burgerToggleEventAdd: function() {
          const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    
          if ($navbarBurgers.length > 0) {
            $navbarBurgers.forEach( el => {
              el.addEventListener('click', () => {
              
                const target = el.dataset.target;
                const $target = document.getElementById(target);
    
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
              });
            });
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