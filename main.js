
var app = new Vue({
    el: '#app',

    data: {
      test: 'Test Vue!',

      currentLan: 'en',

      tab: 'home',

      showLanModal: false,

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
          SKILLS_CARDS: {
            es: [
              {
                title: 'Tecnologías',
                skills: [
                  {
                    name: 'Node.js',
                    score: 90
                  },
                  {
                    name: 'JAVA',
                    score: 100
                  },
                  {
                    name: 'Vue.js',
                    score: 90
                  },
                  {
                    name: 'NoSQL',
                    score: 80
                  },
                  {
                    name: 'SQL',
                    score: 80
                  }
                ]
              },{
                title: 'Sectores',
                skills: [
                  {
                    name: 'Ingeniería de Software',
                    score: 80
                  },
                  {
                    name: 'Desarrollo Back-end',
                    score: 90
                  },
                  {
                    name: 'Desarrollo Front-end',
                    score: 80
                  },
                  {
                    name: 'Aplicaciones móviles',
                    score: 50
                  }
                ]
              },
              {
                title: 'Idiomas',
                skills: [
                  {
                    name: 'Español',
                    score: 100
                  },
                  {
                    name: 'Euskera',
                    score: 90
                  },
                  {
                    name: 'Inglés',
                    score: 80
                  },
                  {
                    name: 'Japonés',
                    score: 50
                  }
                ]
              }
            ],
            en: [
              {
                title: 'Technologies',
                skills: [
                  {
                    name: 'Node.js',
                    score: 90
                  },
                  {
                    name: 'JAVA',
                    score: 100
                  },
                  {
                    name: 'Vue.js',
                    score: 90
                  },
                  {
                    name: 'NoSQL',
                    score: 80
                  },
                  {
                    name: 'SQL',
                    score: 80
                  }
                ]
              },{
                title: 'Sectores',
                skills: [
                  {
                    name: 'Ingeniería de Software',
                    score: 80
                  },
                  {
                    name: 'Desarrollo Back-end',
                    score: 90
                  },
                  {
                    name: 'Desarrollo Front-end',
                    score: 80
                  },
                  {
                    name: 'Aplicaciones móviles',
                    score: 50
                  }
                ]
              },
              {
                title: 'Languages',
                skills: [
                  {
                    name: 'Spanish',
                    score: 100
                  },
                  {
                    name: 'Basque',
                    score: 90
                  },
                  {
                    name: 'English',
                    score: 80
                  },
                  {
                    name: 'Japanese',
                    score: 50
                  }
                ]
              }
            ],
            jp: [
              {
                title: 'Tecnologías',
                skills: [
                  {
                    name: 'Node.js',
                    score: 90
                  },
                  {
                    name: 'JAVA',
                    score: 100
                  },
                  {
                    name: 'Vue.js',
                    score: 90
                  },
                  {
                    name: 'NoSQL',
                    score: 80
                  },
                  {
                    name: 'SQL',
                    score: 80
                  }
                ]
              },{
                title: 'Sectores',
                skills: [
                  {
                    name: 'Ingeniería de Software',
                    score: 80
                  },
                  {
                    name: 'Desarrollo Back-end',
                    score: 90
                  },
                  {
                    name: 'Desarrollo Front-end',
                    score: 80
                  },
                  {
                    name: 'Aplicaciones móviles',
                    score: 50
                  }
                ]
              },
              {
                title: 'Idiomas',
                skills: [
                  {
                    name: 'Español',
                    score: 100
                  },
                  {
                    name: 'Euskera',
                    score: 90
                  },
                  {
                    name: 'Inglés',
                    score: 80
                  },
                  {
                    name: 'Japonés',
                    score: 50
                  }
                ]
              }
            ]
          },
          PROJECTS_CARDS: {
            es: [
              {
                title: 'Mikana',
                subtitle: 'Javier Parada',
                description: 'Esto es la descripcion',
                projectImg: 'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: '',
                repoLink: ''
              }
            ],
            en: [
              {
                title: 'Mikana',
                subtitle: 'Javier Parada',
                description: 'Esto es la descripcion',
                projectImg: 'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: '',
                repoLink: ''
              }
            ],
            jp: [
              {
                title: 'Mikana',
                subtitle: 'Javier Parada',
                description: 'Esto es la descripcion',
                projectImg: 'https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?dpr=1&auto=compress,format&fit=crop&w=1920&h=&q=80&cs=tinysrgb&crop=',
                orgImg: 'https://avatars3.githubusercontent.com/u/19194763?s=460&v=4',
                downloadLink: '',
                repoLink: ''
              }
            ]
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