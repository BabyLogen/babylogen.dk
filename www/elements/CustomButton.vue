<template>
  <nuxt-link v-bind:to="to" class="CustomButton" :class="classes">
    <slot></slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'ghost',
      validator(v) { return ['ghost', 'primary', 'black'].some(type => type === v); },
    },
    to: {
      type: String,
    },
  },
  computed: {
    classes() {
      let c = '';
      c += this.type === 'ghost' ? ' CustomButton--ghost' : '';

      return c;
    },
  },
};
</script>

<style>
  .CustomButton {
    text-decoration: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    font-weight: 700;
    text-transform: uppercase;
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
</style>
