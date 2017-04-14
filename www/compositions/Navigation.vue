<template>
  <grid-container
    class="fixed bg-white width-100 Navigation"
    align="bottom"
    :class="{ 'Navigation--collapse': scrollPosition > 200 }"
  >
    <grid-column xs="6">
      <nav-link to="/" class="animate-ease animate-fast animate-all Navigation-logo">BabyLogen</nav-link>
    </grid-column>
    <grid-column xs="6" class="margin-right-neg-1 right">
      <nav-link to="/om-os/">Om os</nav-link>
      <nav-link to="/events/">Events</nav-link>
      <nav-link to="/ydelser/">Ydelser</nav-link>
      <nav-link to="/blog/">Blog</nav-link>
      <nav-link to="/shop/">Shop</nav-link>
      <nav-link to="/kurv/" class="margin-left-1">
        <span class="Navigation-basket">Kurv (0)</span>
      </nav-link>
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
  .Navigation {
    padding-top: 1rem;
    padding-bottom: 1rem;
    transform: translateZ(0);
    z-index: 100;
  }
  .Navigation-logo {
    font-size: 4rem;
    font-weight: 300;
  }
  .Navigation-logo.nuxt-link-active {
    border-color: var(--color-white);
  }
  .Navigation-logo.nuxt-link-active:hover {
    border-color: var(--color-grey-75);
  }

  .Navigation--collapse .Navigation-logo {
    font-size: 1rem;
    font-weight: 700;
  }
  .Navigation-basket {
    background-color: var(--color-primary);
    margin: -12px -1rem;
    padding: 12px 1rem;
  }
</style>
