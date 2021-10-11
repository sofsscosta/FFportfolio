<template>
  <div>
    <Banner :image-source="bannerImage" section="events"/>
    <ProjectItem v-for="project in projects" :project="project" :key="project.id"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'
import ProjectItem from '~/components/Project/ProjectItem.vue'
import { Project } from "~/types";

export default Vue.extend({
  components: {
    Banner,
    ProjectItem
  },
  data() {
    const projects: Project[] = []
    return {
      bannerImage: "",
      projects
    };
  },
  async fetch({store}) {
    try {
      !store.getters['getBanner']('events').bannerUrl && await store.dispatch('getBanner', 'events')
      !store.state.events.length && await store.dispatch('getSectionItems', 'events')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
    this.bannerImage = this.$store.getters['getBanner']('events').bannerUrl
    this.projects = this.$store.state.events
  }
});
</script>
