<template>
  <grid-container class="Image">
    <grid-column xs="12" class="Image-container" :style="{
      'background-image': `url(${image.fields.file.url}?fm=jpg&fl=progressive&w=${imageWidth})`
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
    fullWidth: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    imageWidth() {
      return this.fullWidth ? 1472 : 736;
    },
  },
};
</script>

<style>
  .Image-container {
    padding-bottom: 35%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .Splits .Image-container {
    padding-bottom: 65%;
  }
</style>
