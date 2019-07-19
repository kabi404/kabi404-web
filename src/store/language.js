export default {
  state: {
    app: require('@/assets/lan/app-lan.json'),
    footer: require('@/assets/lan/footer-lan.json'),
    home: require('@/assets/lan/home-lan.json'),
    navbar: require('@/assets/lan/navbar-lan.json'),
    projects: require('@/assets/lan/projects-lan.json'),
    skills: require('@/assets/lan/skills-lan.json'),
    lanModal: require('@/assets/lan/lan-modal-lan.json')
  },

  getters: {
    getLanById: state => ({ name, id, lan }) => {
      return state[name][id][lan]
    }
  },

  mutations: {},

  actions: {}
}
