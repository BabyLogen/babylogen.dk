<template>
  <grid-container>
    <grid-column xs="12">
      <h2 class="SocialMediaLinks-header">{{header}}</h2>
    </grid-column>
    <grid-column
      v-for="(socialMediaLink, index) in socialMediaLinks"
      xs="6"
      md="4"
      class="SocialMediaLinks-item"
      :key="socialMediaLink.sys.id"
      :class="`SocialMediaLinks-item--col-${index % 4}`"
    >
      <social-media-link v-bind="socialMediaLink.fields" />
    </grid-column>
  </grid-container>
</template>

<script>
import SocialMediaLink from '../components/SocialMediaLink.vue';
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
    SocialMediaLink,
  },
  props: {
    header: String,
    socialMediaLinks: Array,
  },
};
</script>

<style>
  .SocialMediaLinks-header {
    font-size: 2rem;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .SocialMediaLinks-item {
    padding: 0;
  }
  .SocialMediaLinks-item:before {
    content: '';
    float: left;
    padding-top: 50%;
  }
  .SocialMediaLinks-item--col-0 {
    background-color: var(--color-grey-90);
  }
  .SocialMediaLinks-item--col-1 {
    background-color: var(--color-grey-85);
  }
  .SocialMediaLinks-item--col-2 {
    background-color: var(--color-grey-80);
  }
  .SocialMediaLinks-item--col-3 {
    background-color: var(--color-grey-75);
  }

</style>
