<template>
  <grid-container>
    <grid-column xs="12">
      <h2 class="ItemList-header">{{header}}</h2>
      <p class="ItemList-description">{{description}}</p>
    </grid-column>
    <grid-column
      v-for="(item, index) in items"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      class="ItemList-item"
      :key="item.sys.id"
      :class="`ItemList-item--col-${index % 4}`"
    >
      <list-item :id="item.sys.id" />
    </grid-column>
    <grid-column
      xs="12"
      sm="6"
      md="4"
      lg="3"
      class="ItemList-item ItemList-item--cta"
    >
      <div>
        <custom-button :to="getButtonLink()" width="auto">{{buttonText}}</custom-button>
      </div>
    </grid-column>
  </grid-container>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import ListItem from '../components/ListItem.vue';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import CustomButton from '../elements/CustomButton.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
    CustomButton,
    ListItem,
  },
  props: {
    header: String,
    description: String,
    items: Array,
    buttonText: String,
    buttonLink: Object,
  },
  computed: mapState(['pages']),
  methods: {
    getButtonLink() {
      const { path } = find(this.pages, { id: this.buttonLink.sys.id });
      return `/${path}/`;
    },
  },
};
</script>

<style>
  .ItemList-header {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  .ItemList-description {
    margin-bottom: 1rem;
  }

  .ItemList-item {
    padding: 0;
  }
  .ItemList-item--col-0 {
    background-color: var(--color-grey-90);
  }
  .ItemList-item--col-1 {
    background-color: var(--color-grey-85);
  }
  .ItemList-item--col-2 {
    background-color: var(--color-grey-80);
  }
  .ItemList-item--col-3 {
    background-color: var(--color-grey-75);
  }
  .ItemList-item--cta {
    background-color: var(--color-primary);
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 992px) {
  }
  @media (min-width: 1200px) {
  }

</style>
