<template>
  <div>
    <Navbar />
    <nuxt :style="{paddingTop: headerHeight}"/>
    <Footer />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { headerHeight } from '~/utils'

export default Vue.extend({
  data() { return { headerHeight } },
});
</script>