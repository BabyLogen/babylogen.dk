<template>
  <grid-container>
    <grid-column
      xs="12"
      md="fit"
      class="Banner-image"
      :style="{ 'background-image': `url(${image.fields.file.url}?fm=jpg&fl=progressive&w=1000)` }"
    >
    </grid-column>
    <grid-column
      xs="12"
      md="4"
      move-md="left"
      class="Banner-text"
    >
      <div class="Banner-text-content">
        {{text}}<br>
	<custom-button :to="getButtonLink()" class="Banner-cta">{{buttonText}}</custom-button>
      </div>
    </grid-column>
  </grid-container>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import CustomButton from '../elements/CustomButton.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
    CustomButton,
  },
  props: {
    name: String,
    text: String,
    image: Object,
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
  .Banner-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50%;
  }
  .Banner-text {
    background-color: var(--color-primary);
  }
  .Banner-text-content {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 1rem 1.5rem;
  }
  .Banner-cta {
    margin-top: 2rem;
  }
  @media (min-width: 768px) {
    .Banner-text-content {
      font-size: 1.5rem;
      padding: 2rem 1.5rem;
    }
  }
  @media (min-width: 992px) {
    .Banner-text-content {
      font-size: 2rem;
      padding: 5rem 1.5rem;
    }
    .Banner-image {
      padding-top: 0;
    }
  }
  @media (min-width: 1200px) {
    .Banner-text-content {
      padding: 10rem 2.5rem;
    }
  }

</style>
