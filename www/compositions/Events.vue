<template>
  <grid-container>
    <grid-column xs="12">
      <h2 class="Events-header">{{header}}</h2>
      <p class="Events-description">{{description}}</p>
    </grid-column>
    <grid-column
      v-for="(event, index) in events"
      xs="12"
      sm="6"
      md="4"
      lg="3"
      class="Events-item"
      :key="event.sys ? event.sys.id : Math.random()"
      :class="`Events-item--col-${index % 4}`"
    >
      <event v-bind="event.fields" />
    </grid-column>
  </grid-container>
</template>

<script>
import Event from '../components/Event.vue';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import CustomButton from '../elements/CustomButton.vue';
import fetchCommingEvents from '../assets/js/fetch/comming-events';

export default {
  components: {
    GridContainer,
    GridColumn,
    CustomButton,
    Event,
  },
  props: {
    header: String,
    description: String,
    buttonText: String,
    buttonLink: Object,
  },
  data() {
    return {
      events: [{}, {}, {}, {}, {}, {}, {}, {}],
    };
  },
  created() {
    return fetchCommingEvents().then((events) => {
      this.events = events;
    });
  },
};
</script>

<style>
  .Events-header {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  .Events-description {
    margin-bottom: 1rem;
  }

  .Events-item {
    padding: 0;
  }
  .Events-item--col-0 {
    background-color: var(--color-grey-90);
  }
  .Events-item--col-1 {
    background-color: var(--color-grey-85);
  }
  .Events-item--col-2 {
    background-color: var(--color-grey-80);
  }
  .Events-item--col-3 {
    background-color: var(--color-grey-75);
  }
  .Events-item--cta {
    background-color: var(--color-primary);
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 14rem;
  }

</style>
