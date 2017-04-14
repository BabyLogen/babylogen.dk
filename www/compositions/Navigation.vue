<template>
  <grid-container
    class="fixed bg-white width-100 navigation"
    align="bottom"
    :class="{ collapse: scrollPosition > 200 }"
  >
    <grid-column xs="6">
      <nav-link to="/" class="animate-ease animate-fast animate-all logo">BabyLogen</nav-link>
    </grid-column>
    <grid-column xs="6" class="margin-right-neg-1 right">
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
  .logo.nuxt-link-active {
    font-size: 4rem;
    border-color: var(--color-white);
  }
  .logo.nuxt-link-active:hover {
    border-color: var(--color-grey-75);
  }

  .collapse .logo {
    font-size: 1rem;
  }
</style>
