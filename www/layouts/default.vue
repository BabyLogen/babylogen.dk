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
  @import '../assets/css/variables.css';
  .Page { padding-top: 3rem; }

  @media (min-width: 768px) {
    .Page { padding-top: 9rem; }
  }
</style>
