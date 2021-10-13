<template>
  <div>
    <Banner :image-source="bannerImage" section="product"/>
    <div class="m-28">
      <ProjectItem v-for="project in projects" :project="project" :key="project.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Images/Banner.vue'
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
      !store.getters['getBanner']('product').bannerUrl && await store.dispatch('getBanner', 'product')
      !store.state.product.projects.length && await store.dispatch('getSectionItems', 'product')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
    this.bannerImage = this.$store.getters['getBanner']('product').bannerUrl
    this.projects = this.$store.state.product.projects
  }
});
</script>
