<template>
  <nuxt-link v-bind:to="to" class="CustomButton" :class="[
    `CustomButton--${type}`,
  ]">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'ghost',
      validator(v) { return ['ghost', 'ghost-primary', 'primary', 'black'].some(type => type === v); },
    },
    to: String,
  },
};
</script>

<style>
  .CustomButton {
    display: inline-block;
    text-decoration: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
  }
  .CustomButton:hover {
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
  .CustomButton:focus {
    outline: 0;
  }

  .CustomButton--ghost {
    color: var(--color-black);
    border: 1px solid var(--color-black);
    background: transparent;
  }
  .CustomButton--ghost:hover {
    color: var(--color-primary);
    background-color: var(--color-black);
  }
  .CustomButton--ghost:active {
    color: var(--color-white);
  }

  .CustomButton--ghost-primary {
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
    background: transparent;
  }
  .CustomButton--ghost-primary:hover {
    color: var(--color-black);
    background-color: var(--color-primary);
  }
  .CustomButton--ghost-primary:active {
    background-color: var(--color-white);
    border-color: var(--color-white);
  }
</style>
