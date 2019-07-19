<template>
  <div class="container has-text-centered">
    <div class="columns is-multiline">
      <div class="column is-one-third" v-for="index in [0,1,2]" :key="index">
        <div v-for="(project, subindex) in projects" :key="subindex" class="columns">
          <div v-if="subindex % 3 == index" class="column">
            <ProjectCard
              :title="project.title"
              :subtitle="project.subtitle"
              :screenshot="project.projectImg"
              :img="project.orgImg"
              :description="project.description"
              :downloadLink="project.downloadLink"
              :repoLink="project.repoLink"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'
export default {
  name: 'projects',

  components: {
    ProjectCard
  },

  data: function() {
    return {

    }
  },

  methods: {
    lang: function (strId) {
      return this.$store.getters.getLanById({
        name:this.$options.name,
        id:strId,
        lan:this.currentLan
      })
    }
  },

  computed: {
    currentLan: function() {
      return this.$store.state.lan
    },

    projects: function () {
      return this.lang('PROJECTS_CARDS')
    }
  }
}
</script>

