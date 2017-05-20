<template>
  <grid-container class="Splits">
    <grid-column
      v-for="(module, i) in modules"
      xs="12"
      sm="6"
      class="Splits-item"
      :class="`Splits-item--col-${i % 4}`"
      :key="module.sys.id"
    >
        <content-box
          v-if="module.sys.contentType.sys.id === 'contentBox'"
          v-bind="module.fields"
        />
        <image-box
          v-if="module.sys.contentType.sys.id === 'imageBox'"
          v-bind="module.fields"
        />
    </grid-column>
  </grid-container>
</template>

<script>
import ContentBox from '../compositions/ContentBox.vue';
import ImageBox from '../components/ImageBox.vue';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';

export default {
  components: {
    ContentBox,
    ImageBox,
    GridContainer,
    GridColumn,
  },
  props: {
    modules: { type: Array },
  },
};
</script>

<style>
  .Splits-item {
    padding-left: 0;
    padding-right: 0;
  }
  .Splits-item .Grid-container {
    padding: 0;
    height: 100%;
  }
  .Splits-item .Grid-column {
    height: 100%;
  }
  .Splits-item h2 {
    font-size: 1.5rem;
    font-weight: 700;
  }
  .Splits-item--col-0 .ContentBox--theme-light {
    background-color: var(--color-grey-90);
  }
  .Splits-item--col-1 .ContentBox--theme-light {
    background-color: var(--color-grey-85);
  }
  .Splits-item--col-2 .ContentBox--theme-light {
    background-color: var(--color-grey-80);
  }
  .Splits-item--col-3 .ContentBox--theme-light {
    background-color: var(--color-grey-75);
  }
</style>
