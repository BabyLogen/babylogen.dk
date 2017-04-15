<template>
  <button class="padding-vertical-05 padding-horizontal-2 pointer bold caps CustomButton" :class="classes">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'ghost',
      validator(v) { return ['ghost', 'primary', 'black'].some(type => type === v); },
    },
  },
  computed: {
    classes() {
      let c = '';
      c += this.type === 'ghost' ? ' border border-black bg-transparent CustomButton--ghost' : '';

      return c;
    },
  },
};
</script>

<style>
  .CustomButton:focus {
    outline: 0;
  }

  .CustomButton--ghost:hover {
    color: var(--color-primary);
    background-color: var(--color-black);
  }
  .CustomButton--ghost:active {
    color: var(--color-white);
  }
</style>
