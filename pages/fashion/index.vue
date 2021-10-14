<template>
  <div>
    <Banner :image-source="bannerImage" section="fashion"/>
    <div class="m-28">
      <ProjectItem v-for="project in projects" :project="project" :key="project.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Banner/Banner.vue'
import ProjectItem from '~/components/Project/Photography/ProjectItem.vue'
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
      !store.getters['getBanner']('fashion').bannerUrl && await store.dispatch('getBanner', 'fashion')
      !store.state.fashion.projects.length && await store.dispatch('getSectionItems', 'fashion')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
    this.bannerImage = this.$store.getters['getBanner']('fashion').bannerUrl
    this.projects = this.$store.state.fashion.projects
  }
});
</script>
