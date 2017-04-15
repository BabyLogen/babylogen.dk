<template>
  <div class="flex wrap width-100 middle Grid-container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      validator(v) { return ['top', 'middle', 'bottom'].some(pos => pos === v); },
    },
  },
  computed: {
    classes() {
      let c = '';
      c += this.align ? ` flex-${this.align}` : '';

      return c;
    },
  },
};
</script>

<style>
  .Grid-container {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 1600px;
  }
  @media (min-width: 768px) {
    .Grid-container {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
  @media (min-width: 992px) {
    .Grid-container {
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }
  @media (min-width: 1200px) {
    .Grid-container {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
</style>
