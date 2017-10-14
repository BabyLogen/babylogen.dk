<template>
  <nuxt-link v-if="to" v-bind:to="to" class="Nav-link">
    <slot></slot>
  </nuxt-link>
  <span v-else class="Nav-link">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ['to'],
};
</script>

<style>
  @import '../assets/css/variables.css';
  .Nav-link {
    color: var(--color-black);
    text-decoration: none;
    font-weight: 700;
    text-transform: uppercase;
    padding: 1rem 1rem 12px;
    border-bottom: 4px solid transparent;
    transition: border 0.25s cubic-bezier(.5,0,.1,1);
    cursor: pointer;
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
