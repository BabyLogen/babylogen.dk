<template>
  <grid-container>
    <grid-column
      xs="12"
      md="fit"
      class="background-image cover Banner-image"
      v-bind:style="{ 'background-image': `url(${imageSrc}?fm=jpg&q=80&fl=progressive&w=1000)` }"
    >
    </grid-column>
    <grid-column
      xs="12"
      md="4"
      move-md="left"
      class="bg-primary caps light Banner-text"
    >
      <slot></slot>
    </grid-column>
  </grid-container>
</template>

<script>
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
  },
  props: {
    imageSrc: {
      type: String,
    },
  },
};
</script>

<style>
  .Banner-image {
    padding-top: 50%;
  }
  .Banner-text {
    font-size: 1.5rem;
    padding: 1rem 2rem;
  }
  @media (min-width: 768px) {
    .Banner-text {
      font-size: 1.5rem;
      padding: 2rem 2rem;
    }
  }
  @media (min-width: 992px) {
    .Banner-text {
      font-size: 2rem;
      padding: 5rem 2rem;
    }
    .Banner-image {
      padding-top: 0;
    }
  }
  @media (min-width: 1200px) {
    .Banner-text {
      padding: 6rem 3rem;
    }
  }

</style>
