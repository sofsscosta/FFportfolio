<template>
    <div>
        <p>Ups! Some error occurred!</p>
        <nuxt-link :to="$router.go(-1)">Go back</nuxt-link>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>