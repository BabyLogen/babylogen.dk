<template>
  <grid-container
    class="fixed bg-white animate-ease animate-fast animate-padding Navigation"
    align="middle"
    :class="{ 'Navigation--collapsed': scrollPosition > 200 }"
  >
    <grid-column xs="expand">
      <nav-link v-on:click.native="closeNavigation" to="/" class="margin-left-neg-1 regular animate-ease animate-fast animate-all Navigation-logo">BabyLogen</nav-link>
    </grid-column>
    <grid-column xs="fit" class="right">
      <nav-link v-on:click.native="closeNavigation" to="/om-os/" class="hide-xs inline-md">Om os</nav-link>
      <nav-link v-on:click.native="closeNavigation" to="/events/" class="hide-xs inline-md">Events</nav-link>
      <nav-link v-on:click.native="closeNavigation" to="/ydelser/" class="hide-xs inline-md">Ydelser</nav-link>
      <nav-link v-on:click.native="closeNavigation" to="/blog/" class="hide-xs inline-md">Blog</nav-link>
      <nav-link v-on:click.native="closeNavigation" to="/shop/" class="hide-xs inline-md">Shop</nav-link>
      <nav-link v-on:click.native="closeNavigation" to="/kurv/" class="hide-xs inline-sm margin-left-1">
        <span class="Navigation-basket">Kurv (0)</span>
      </nav-link>
      <nav-link v-on:click.native="toggleNavigation" class="margin-left-1 hide-md">
        <span class="border border-grey-75 Navigation-menu">{{open ? 'Luk' : 'Menu'}}</span>
      </nav-link>
    </grid-column>
    <grid-column xs="12" class="hide-md padding-top-3" :class="{ hidden: !open }">
      <div class="center margin-vertical-3"><nav-link v-on:click.native="closeNavigation" to="/om-os/">Om os</nav-link></div>
      <div class="center margin-vertical-3"><nav-link v-on:click.native="closeNavigation" to="/events/">Events</nav-link></div>
      <div class="center margin-vertical-3"><nav-link v-on:click.native="closeNavigation" to="/ydelser/">Ydelser</nav-link></div>
      <div class="center margin-vertical-3"><nav-link v-on:click.native="closeNavigation" to="/blog/">Blog</nav-link></div>
      <div class="center margin-vertical-3"><nav-link v-on:click.native="closeNavigation" to="/shop/">Shop</nav-link></div>
      <div class="center margin-vertical-3 hide-sm">
        <nav-link v-on:click.native="closeNavigation" to="/kurv/">
          <span class="Navigation-basket">Kurv (0)</span>
        </nav-link>
      </div>
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
      open: false,
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    toggleNavigation() {
      this.open = !this.open;
    },
    closeNavigation() {
      this.open = false;
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
    padding-top: 3rem;
    padding-bottom: 3rem;
    transform: translateZ(0);
    z-index: 100;
  }

  @media (min-width: 768px) {
    .Navigation-logo {
      font-size: 2rem;
    }
  }
  .Navigation-logo.nuxt-link-active {
    border-color: var(--color-white);
  }
  .Navigation-logo.nuxt-link-active:hover {
    border-color: var(--color-grey-75);
  }

  .Navigation--collapsed {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .Navigation--collapsed .Navigation-logo {
    font-size: 1rem;
    font-weight: 700;
  }

  .Navigation-basket {
    background-color: var(--color-primary);
    margin: -12px -1rem -12px -1rem;
    padding: 12px 1rem;
  }

  .Navigation-menu {
    margin: -12px -1rem -12px -1rem;
    padding: 12px 1rem;
  }
</style>
