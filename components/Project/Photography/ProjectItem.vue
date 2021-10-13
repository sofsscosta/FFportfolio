<template>
  <div class="mb-28 overflow-x-hidden" >
    <nuxt-link :to="slug" class="w-full h-full">
      <header class="flex flex-wrap flex-row justify-between font-thin">
        <div>
          <h2 class="text-3xl mb-3">
            {{ title }}
          </h2>
          <p>
            {{ subtitle }}
          </p>
        </div>
        <div class="flex flex-col items-end">
          <p class="mb-3">
            {{ date }}
          </p>
          <div class="flex flex-row">
            <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="ml-2"/>
          </div>
        </div>
      </header>
      <section class="flex flex-row mt-10 justify-between">
        <img v-for="(image, index) in images_preview" :src="image" :key="index" class="w-1/3 mr-2 object-cover">
      </section>
    </nuxt-link>
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