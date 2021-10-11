<template>
  <div class="h-96 mb-28">
    <header class="flex flex-wrap flex-row h-16 justify-between font-thin">
      <div>
        <h2>
          {{ title }}
        </h2>
        <p>
          {{ subtitle }}
        </p>
      </div>
      <div class="flex flex-col items-end">
        <p>
          {{ date }}
        </p>
        <div class="flex flex-row">
          <Tag v-for="tag in tags" :key="tag" :tag="tag" class="ml-2"/>
        </div>
      </div>
    </header>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
//@ts-ignore
import Tag from '~/components/Project/Tag.vue'

export default Vue.extend({
  components: { Tag },
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