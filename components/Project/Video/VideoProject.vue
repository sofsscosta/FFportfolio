<template>
  <div class="max-w-xl overflow-x-hidden mb-28 mx-auto" >
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
          <div class="flex flex-row" v-if="tags && tags.length">
            <Tag v-for="tag in tags" :key="tag" :tag="tag" class="ml-2"/>
          </div>
        </div>
      </header>
      <img :src="image_preview" alt="" class="w-full h-auto mt-10">
      <!-- <div :inner-html.prop="embed" class="w-full mt-10"/> -->
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