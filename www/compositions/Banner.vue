<template>
  <grid-container>
    <grid-column
      xs="12"
      md="fit"
      class="Banner-image"
      :style="{ 'background-image': `url(${imageUrl}?fm=jpg&fl=progressive&w=1000)` }"
    >
    </grid-column>
    <grid-column
      xs="12"
      md="4"
      move-md="left"
      class="Banner-text"
    >
      {{text}}<br>
      <custom-button :to="buttonLink">{{buttonText}}</custom-button>
    </grid-column>
  </grid-container>
</template>

<script>
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import CustomButton from '../elements/CustomButton.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
    CustomButton,
  },
  props: ['buttonText', 'imageUrl', 'text', 'buttonLink'],
};
</script>

<style>
  .Banner-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50%;
  }
  .Banner-text {
    background-color: var(--color-primary);
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
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
