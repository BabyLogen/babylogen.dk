<template>
  <grid-container>
    <grid-column xs="12">
      <h2 class="Services-header">{{header}}</h2>
      <p class="Services-description">{{description}}</p>
    </grid-column>
    <grid-column
      v-for="(item, index) in items"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      class="Services-item"
      :key="item.sys.id"
      :class="`Services-item--col-${index % 4}`"
    >
      <service v-bind="item.fields" />
    </grid-column>
    <grid-column
      xs="12"
      sm="6"
      md="4"
      lg="3"
      class="Services-item Services-item--cta"
    >
      <div>
        <custom-button :to="`/ydelser/${buttonLink.fields.path}`" width="auto">
          {{buttonText}}
        </custom-button>
      </div>
    </grid-column>
  </grid-container>
</template>

<script>
import Service from '../components/Service.vue';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import CustomButton from '../elements/CustomButton.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
    CustomButton,
    Service,
  },
  props: {
    header: String,
    description: String,
    items: Array,
    buttonText: String,
    buttonLink: Object,
  },
};
</script>

<style>
  .Services-header {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  .Services-description {
    margin-bottom: 1rem;
  }

  .Services-item {
    padding: 0;
  }
  .Services-item--col-0 {
    background-color: var(--color-grey-90);
  }
  .Services-item--col-1 {
    background-color: var(--color-grey-85);
  }
  .Services-item--col-2 {
    background-color: var(--color-grey-80);
  }
  .Services-item--col-3 {
    background-color: var(--color-grey-75);
  }
  .Services-item--cta {
    background-color: var(--color-primary);
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 20rem;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }

</style>
