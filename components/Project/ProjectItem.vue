<template>
    <div>
      {{ title }}
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: { 
    project: {
      required: true,
      default: {
        id: 0,
        date: '',
        description: '',
        images: [],
        images_preview: [],
        slug: '',
        subtitle: '',
        title: '',
        tags: [],
      }
    } 
  },
  data() { return { ...this.project }}
});
</script>