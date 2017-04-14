<template>
  <grid-container
    class="fixed bg-white width-100 navigation"
    align="bottom"
    :class="{ collapse: scrollPosition > 200 }"
  >
    <grid-column xs="4">
      <nuxt-link to="/">
        <img src="/images/logo-icon.svg" class="animate-ease animate-fast animate-height logo-icon" />
        <img src="/images/logo.svg" class="animate-ease animate-fast animate-height margin-left-1 logo" />
      </nuxt-link>
    </grid-column>
    <grid-column xs="8" class="margin-right-neg-1 right">
      <nav-link to="/om-os/">Om os</nav-link>
      <nav-link to="/events/">Events</nav-link>
      <nav-link to="/ydelser/">Ydelser</nav-link>
      <nav-link to="/blog/">Blog</nav-link>
      <nav-link to="/shop/">Shop</nav-link>
      <nav-link to="/kurv/">Kurv</nav-link>
    </grid-column>
  </grid-container>
</template>

<script>
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import NavLink from '../elements/NavLink.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
    NavLink,
  },
  data() {
    return {
      scrollPosition: null,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },
  mounted() {
    this.updateScroll();
    window.addEventListener('scroll', this.updateScroll);
  },
};
</script>

<style>
  .navigation {
    padding-top: 1rem;
    padding-bottom: 1rem;
    transform: translateZ(0);
    z-index: 100;
  }
  .logo-icon {
    height: 5rem;
  }
  .logo {
    height: 2rem;
  }

  .collapse .logo-icon, .collapse .logo {
    height: 1rem;
  }
</style>
