export default {
  state: {
    app: require('@/assets/lan/app-lan.json'),
    footer: require('@/assets/lan/footer-lan.json'),
    home: require('@/assets/lan/home-lan.json'),
    navbar: require('@/assets/lan/navbar-lan.json')
  },

  getters: {
    getLanById: state => ({ name, id, lan }) => {
      return state[name][id][lan]
    }
  },

  mutations: {},

  actions: {}
}
