<template>
  <div class="Page">
    <navigation />
    <nuxt/>
  </div>
</template>

<script>
import Navigation from '../compositions/Navigation.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
  .Page {
    padding-top: 10rem;
  }
</style>
