<template>
  <grid-container>
    <grid-column
      class="ContentBox"
      :class="`ContentBox--${theme}`"
      v-bind="grid.padding"
    />
    <grid-column
      class="ContentBox"
      :class="[
        `ContentBox--${theme}`,
        `ContentBox--${align}`,
      ]"
      v-bind="grid.content"
    >
      <div class="ContentBox-content">
        <h2 class="ContentBox-header">{{header}}</h2>
        <p>{{body}}</p>
        <p class="ContentBox-button">
          <custom-button type="ghost-primary" :to="getButtonLink()">{{buttonText}}</custom-button>
        </p>
      </div>
    </grid-column>
    <grid-column
      class="ContentBox"
      :class="`ContentBox--${theme}`"
      v-bind="grid.padding"
    />
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
    width: {
      type: String,
      default: 'wide',
      validator(v) { return ['wide', 'narrow'].some(width => width === v); },
    },
    theme: {
      type: String,
      default: 'light',
      validator(v) { return ['light', 'dark'].some(theme => theme === v); },
    },
    align: {
      type: String,
      default: 'left',
      validator(v) { return ['left', 'center', 'right'].some(align => align === v); },
    },
    header: String,
    body: String,
    buttonText: String,
    buttonLink: Object,
  },
  computed: {
    ...mapState(['pages']),
    grid() {
      let grid = {
        padding: {
          xs: '0',
        },
        content: {
          xs: '12',
        },
      };
      if (this.width === 'narrow') {
        grid = {
          padding: {
            xs: '0',
            sm: '2',
            md: '3',
            lg: '4',
          },
          content: {
            xs: '12',
            sm: '8',
            md: '6',
            lg: '4',
          },
        };
      }
      return grid;
    },
  },
  methods: {
    getButtonLink() {
      const { path } = find(this.pages, { id: this.buttonLink.sys.id });
      return `/${path}/`;
    },
  },
};
</script>

<style>
  .ContentBox--dark {
    background-color: var(--color-black);
    color: var(--color-white);
  }
  .ContentBox--center {
    text-align: center;
  }

  .ContentBox-content {
    padding: 6rem 2.5rem;
  }
  .ContentBox-header {
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 300;
    line-height: 1.1;
    margin-bottom: 2rem;
  }
  .ContentBox-button {
    margin-top: 2rem;
  }
</style>
