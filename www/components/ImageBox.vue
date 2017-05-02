<template>
  <grid-container class="Image">
    <grid-column xs="12" class="Image-container" :style="{
      'background-image': `url(${image.fields.file.url}?fm=jpg&fl=progressive&w=1472)`
    }">
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
    image: Object,
  },
};
</script>

<style>
  .Image-container {
    padding-bottom: 40%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
</style>
