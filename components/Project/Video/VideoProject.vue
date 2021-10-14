<template>
  <div class="mb-20 md:mb-28 overflow-x-hidden max-w-xl mx-auto" >
    <nuxt-link :to="slug" class="w-full h-full">
      <header class="flex flex-wrap flex-col md:flex-row justify-between font-thin">
        <div class="mb-2 md:mb-0">
          <h2 class="text-3xl mb-1 md:mb-3 max-w-xs">
            {{ title }}
          </h2>
          <p v-if="subtitle" class="text-lg md:text-base">
            {{ subtitle }}
          </p>
        </div>
        <div class="flex flex-col md:items-end justify-end">
          <p v-if="date" class="mt-2 md:mt-0 mb-2 md:mb-3 text-xs md_text-base">
            {{ date }}
          </p>
          <div v-if="tags && tags.length" class="flex flex-row">
            <Tag v-for="(tag, index) in tags" :key="index" :tag="tag" class="mr-2 md:mr-0 md:ml-2"/>
          </div>
        </div>
      </header>
      <img :src="image_preview" alt="" class="w-full h-auto mt-5">
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
        image_preview: '',
        slug: '',
        subtitle: '',
        embed: '',
        title: '',
        tags: [],
      }
    } 
  },
  data() { return { ...this.project }}
});
</script>