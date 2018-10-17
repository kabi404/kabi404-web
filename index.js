var aboutme = require('./components/aboutme');
var skills = require('./components/skills');
var projects = require('./components/projects');
var blog = require('./components/blog');
var gallery = require('./components/gallery');

var vue = new Vue({
    el: '#app',
    data: {
        sections: [
            {
                title: 'About me',
                icon: 'fas fa-user',
                isActive: true,
            },
            {
                title: 'Skills',
                icon: 'fas fa-brain',
                isActive: false,
            },
            {
                title: 'Projects',
                icon: 'fas fa-drafting-compass',
                isActive: false,            
            },
            {
                title: 'Blog',
                icon: 'fas fa-feather-alt',
                isActive: false,
            },
            {
                title: 'Gallery',
                icon: 'fas fa-camera-retro',
                isActive: false,
            }
        ]
    },

    computed: {

    },

    methods: {
        activeTab: function(index){
            var sections = this.$data.sections;
            for(var i=0; i<sections.length; i++)
                sections[i].isActive = false;

            sections[index].isActive = true;
        }
    }
});