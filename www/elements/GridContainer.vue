<template>
  <div class="flex wrap width-100 grid-container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: 'top',
      validator(v) { return ['top', 'middle', 'bottom'].some(pos => pos === v); },
    },
  },
  computed: {
    classes() {
      let c = '';
      c += ` flex-${this.align}`;

      return c;
    },
  },
};
</script>

<style>
  .grid-container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
</style>
