
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
          PROJECTS_CARDS: {
            es: [
              {
                title: 'Kanjinary',
                subtitle: 'Javier Parada',
                description: 'Aplicación web y base de datos para estudiar kanjis japoneses en el orden de estudio japonés. Datos obtenidos de apuntes de la Escuela Oficial de Idiomas de Málaga.',
                projectImg: './img/kanjinary.png',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: 'https://www.kabi404.dev/kanjinary/',
                repoLink: 'https://github.com/kabi404/kanjinary'
              },{
                title: 'PPCE',
                subtitle: 'Javier Parada',
                description: 'Plataforma de Prevención y Control de Emergencias. Trabajo de final de grado en la Universidad de Málaga en el grado de Ingeniería del Software.',
                projectImg: './img/ppce.png',
                orgImg: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Universidad_de_Málaga.jpg',
                downloadLink: 'http://www.kabi404.dev/PPCE/',
                repoLink: 'https://github.com/kabi404/PPCE'
              },{
                title: 'Kanami',
                subtitle: 'Javier Parada',
                description: 'Aplicación web y de escritorio minimalista para aprender los silabarios japoneses Hiragana y Katakana. Una sola compilación para generar ambas aplicaciones.',
                projectImg: './img/kanami.png',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: 'https://www.kabi404.dev/Kanami/',
                repoLink: 'https://github.com/kabi404/Kanami'
              },{
                title: 'Mikana',
                subtitle: 'ArtichokeCore',
                description: 'Aplicación móvil nativa Android para aprender los silabarios japoneses Hiragana y Katakana.',
                projectImg: './img/mikana.png',
                orgImg: 'https://avatars2.githubusercontent.com/u/35332682?s=200&v=4',
                downloadLink: 'https://play.google.com/store/apps/details?id=com.artichokecore.mikana&hl=es',
                repoLink: 'https://github.com/kabi404/Kanami'
              },{
                title: 'Joseto',
                subtitle: 'Javier Parada',
                description: 'Bot de Discord modular al que introducirle facilmente comandos y diversas funcionalidades.',
                projectImg: './img/joseto.png',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: 'https://www.kabi404.dev/Joseto/',
                repoLink: 'https://github.com/kabi404/Joseto'
              }
            ],
            en: [
              {
                title: 'Kanami',
                subtitle: 'Javier Parada',
                description: 'Esto es la descripcion',
                projectImg: './img/kanami.png',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: 'https://www.kabi404.dev/Kanami/',
                repoLink: 'https://github.com/kabi404/Kanami'
              }
            ],
            jp: [
              {
                title: 'Kanami',
                subtitle: 'Javier Parada',
                description: 'Esto es la descripcion',
                projectImg: './img/kanami.png',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: 'https://www.kabi404.dev/Kanami/',
                repoLink: 'https://github.com/kabi404/Kanami'
              }
            ]
          }
      }
    },

    components: {
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

