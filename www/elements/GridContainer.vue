<template>
  <div class="Grid-container" :class="classes">
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
      c += this.align ? ` Grid-container--${this.align}` : '';

      return c;
    },
  },
};
</script>

<style>
  .Grid-container {
    /*padding-left: 1rem;
    padding-right: 1rem;*/
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
  }
  .Grid-container--top { align-items: flex-start; }
  .Grid-container--middle { align-items: center; }
  .Grid-container--bottom { align-items: flex-end; }

  /*@media (min-width: 768px) {
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
  }*/
</style>
