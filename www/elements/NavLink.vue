<template>
  <nuxt-link
    v-bind:to="to"
    class="black no-text-decoration bold caps padding-1 animate-ease animate-fast animate-border nav-link"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: ['to'],
};
</script>

<style>
  .nav-link {
    padding: 1rem 1rem 12px;
  }
  .nav-link {
    border-bottom: 4px solid var(--color-white);
  }
  .nav-link:hover {
    border-bottom-color: var(--color-grey-75);
  }
  .nav-link:active, .nuxt-link-active, .nuxt-link-active:hover {
    border-bottom-color: var(--color-primary);
  }
</style>
