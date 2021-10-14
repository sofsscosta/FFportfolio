<template>
  <div>
    <Banner :image-source="bannerImage" section="video"/>
    <div class="m-28">
      <VideoProject v-for="project in projects" :project="project" :key="project.id"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Banner from '~/components/Banner/Banner.vue'
import VideoProject from '~/components/Project/Video/VideoProject.vue'
import { Project } from "~/types";

export default Vue.extend({
  components: {
    Banner,
    VideoProject
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
      !store.getters['getBanner']('video').bannerUrl && await store.dispatch('getBanner', 'video')
      !store.state.video.projects.length && await store.dispatch('getSectionItems', 'video')
    } catch (error) {
      console.error(error);
    }
  },
  created() {
    this.bannerImage = this.$store.getters['getBanner']('video').bannerUrl
    this.projects = this.$store.state.video.projects
  }
});
</script>
