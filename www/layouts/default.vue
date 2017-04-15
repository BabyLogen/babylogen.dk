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
  .Page { padding-top: 4.5rem; }

  @media (min-width: 768px) {
    .Page { padding-top: 11.5rem; }
  }
</style>
