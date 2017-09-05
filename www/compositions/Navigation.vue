<template>
  <div
    class="Navigation"
    :class="{ 'Navigation--collapsed': scrollPosition > 144 }"
  >
    <grid-container align="middle">
      <grid-column xs="expand">
        <nav-link
          v-on:click.native="closeNavigation"
          to="/"
          class="Navigation-logo"
        >
          BabyTeamet
        </nav-link>
      </grid-column>
      <grid-column xs="fit" class="Navigation-links">
        <template v-for="link in navigation">
          <nav-link v-on:click.native="closeNavigation" :to="link.path" class="Navigation-link">{{link.title}}</nav-link>
        </template>
        <!--<nav-link v-on:click.native="closeNavigation" to="/kurv/" class="Navigation-basket">
          <span>Kurv (0)</span>
        </nav-link>-->
        <nav-link v-on:click.native="toggleNavigation" class="Navigation-menu">
          <span>{{open ? 'Luk' : 'Menu'}}</span>
        </nav-link>
      </grid-column>
      <grid-column xs="12" class="Navigation-mobile" :class="{ 'Navigation-mobile--hidden': !open }">
        <template v-for="link in navigation">
          <div class="Navigation-mobile-link"><nav-link v-on:click.native="closeNavigation" :to="link.path">{{ link.title }}</nav-link></div>
        </template>
        <!--<div class="Navigation-mobile-link Navigation-mobile-link--basket">
          <nav-link v-on:click.native="closeNavigation" to="/kurv/">
            <span>Kurv (0)</span>
          </nav-link>
        </div>-->
      </grid-column>
    </grid-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
  computed: mapState(['navigation']),
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: var(--color-white);
    padding-top: 13px;
    padding-bottom: 13px;
    transform: translateZ(0);
    transition: padding 0.25s cubic-bezier(.5,0,.1,1);
    z-index: 10;
  }

  .Navigation-logo {
    margin-left: -1rem;
    letter-spacing: 0.1rem;
    transition: all 0.25s cubic-bezier(.5,0,.1,1) !important;
  }
  .Navigation-logo.nuxt-link-active,
  .Navigation-logo.nuxt-link-active:focus,
  .Navigation-logo.nuxt-link-active:active {
    border-color: var(--color-white);
  }
  .Navigation-logo.nuxt-link-active:hover {
    border-color: var(--color-grey-75);
  }

  .Navigation--collapsed {
    padding-top: 13px !important;
    padding-bottom: 13px !important;
  }
  .Navigation--collapsed .Navigation-logo {
    font-size: 1rem;
    font-weight: 700;
  }

  .Navigation-links {
    text-align: right;
  }
  .Navigation-link {
    display: none;
    margin-right: 1rem;
  }

  .Navigation-basket {
    display: none;
  }
  .Navigation-basket span {
    background-color: var(--color-primary);
    margin: -12px -1rem -12px -1rem;
    padding: 12px 1rem;
  }

  .Navigation-menu {
    margin-left: 1rem;
  }
  .Navigation-menu span {
    border: 1px solid var(--color-grey-75);
    margin: -12px -1rem -12px -1rem;
    padding: 12px 1rem;
  }

  .Navigation-mobile {
    padding-top: 1rem;
    min-height: 100vh;
  }
  .Navigation-mobile--hidden {
    display: none;
  }
  .Navigation-mobile-link {
    text-align: center;
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  .Navigation-mobile-link--basket span {
    background-color: var(--color-primary);
    margin: -12px -1rem -12px -1rem;
    padding: 12px 1rem;
  }

  @media (min-width: 768px) {
    .Navigation {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }
    .Navigation-logo {
      font-size: 2rem;
    }
    .Navigation-basket {
      display: inline;
    }
    .Navigation-mobile-link--basket {
      display: none;
    }
  }

  @media (min-width: 992px) {
    .Navigation-link {
      display: inline;
    }
    .Navigation-menu {
      display: none;
    }
    .Navigation-mobile {
      display: none;
    }
  }
</style>
