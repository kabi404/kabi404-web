<template>
  <div class="container has-text-centered">
    <div class="tabs is-centered is-small is-toggle is-toggle-rounded">
      <ul>
        <li v-bind:class="{'is-active': selectedTab == 'front-end'}">
          <a @click="setTab('front-end')">
            <span class="icon is-small"><font-awesome-icon :icon="['fa', 'file-code']"/></span>
            <span>{{lang('FRONT_END')}}</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': selectedTab == 'back-end'}">
          <a @click="setTab('back-end')">
            <span class="icon is-small"><font-awesome-icon :icon="['fa', 'server']"/></span>
            <span>{{lang('BACK_END')}}</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': selectedTab == 'databases'}">
          <a @click="setTab('databases')">
            <span class="icon is-small"><font-awesome-icon :icon="['fa', 'database']"/></span>
            <span>{{lang('DATABASES')}}</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': selectedTab == 'mobile'}">
          <a @click="setTab('mobile')">
            <span class="icon is-small"><font-awesome-icon :icon="['fa', 'mobile']"/></span>
            <span>{{lang('MOBILE')}}</span>
          </a>
        </li>
        <li v-bind:class="{'is-active': selectedTab == 'languages'}">
          <a @click="setTab('languages')">
            <span class="icon is-small"><font-awesome-icon :icon="['fa', 'globe']"/></span>
            <span>{{lang('LANGUAGES')}}</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="columns is-centered">
      <div class="column is-6">

         <div id="chart">
      <apexchart type=radialBar height=350 :options="chart.chartOptions" :series="chart.series" />
    </div>

      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'

export default {

  name: 'skills',

  components: {
    apexchart: VueApexCharts
  },

  computed: {
    chart: function() {
      let chart = this.selectedTab
      return require(`@/assets/skills/${chart}.js`)
    },

    currentLan: function() {
      return this.$store.state.lan
    }
  },

  data: function() {
    return {
      selectedTab: 'front-end'
    }
  },

  methods: {
    setTab: function(tab) {
      this.selectedTab = tab
    },

    lang: function(strId) {
      return this.$store.getters.getLanById({
        name: this.$options.name,
        id: strId,
        lan: this.currentLan
      })
    }
  }
}
</script>
