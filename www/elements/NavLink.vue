<template>
  <nuxt-link
    v-if="to"
    v-bind:to="to"
    class="black no-text-decoration bold caps padding-1 animate-ease animate-fast animate-border Nav-link"
  >
    <slot></slot>
  </nuxt-link>
  <span
    v-else
    class="pointer black no-text-decoration bold caps padding-1 animate-ease animate-fast animate-border Nav-link"
  >
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['to'],
};
</script>

<style>
  .Nav-link {
    padding: 1rem 1rem 12px;
  }
  .Nav-link {
    border-bottom: 4px solid transparent;
  }
  .Nav-link:hover {
    border-bottom-color: var(--color-grey-75);
  }
  .touch .Nav-link:hover {
    border-bottom-color: transparent;
  }
  .Nav-link:active, .Nav-link:focus, .nuxt-link-active, .nuxt-link-active:hover {
    border-bottom-color: var(--color-primary);
  }
</style>
