<template>
  <grid-container>
    <grid-column
      class="ContentBox"
      :class="`ContentBox--theme-${theme}`"
      v-bind="grid.padding"
    />
    <grid-column
      class="ContentBox"
      :class="[
        `ContentBox--theme-${theme}`,
      ]"
      v-bind="grid.content"
    >
      <div class="ContentBox-content" :class="[
        `ContentBox-content--spacing-${spacing}`,
        `ContentBox-content--align-${align}`,
      ]">
        <h2 v-if="header" class="ContentBox-header">{{header}}</h2>
        <div v-if="body" v-html="htmlBody"/>
	<p v-if="buttonLink && buttonText" class="ContentBox-button">
          <custom-button :type="buttonType" :to="`/${buttonLink.fields.path}/`">{{buttonText}}</custom-button>
        </p>
      </div>
    </grid-column>
    <grid-column
      class="ContentBox"
      :class="`ContentBox--theme-${theme}`"
      v-bind="grid.padding"
    />
  </grid-container>
</template>

<script>
import marked from 'marked';
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
    spacing: {
      type: String,
      default: 'much',
      validator(v) { return ['much', 'little'].some(width => width === v); },
    },
    theme: {
      type: String,
      default: 'light',
      validator(v) { return ['light', 'dark', 'primary'].some(theme => theme === v); },
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
    buttonType() {
      if (this.theme === 'dark') {
        return this.$store.state.experiments.contentBoxButtonType.variant;
      }
      return 'ghost';
    },
    htmlBody() {
      return this.body ? marked(this.body, { breaks: true }) : '<span></span>';
    },
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
};
</script>

<style>

  .ContentBox a {
    color: var(--color-black);
  }

  .ContentBox ul {
    padding-left: 2rem;
    margin-bottom: 1rem;
  }

  /* Themes */
  .ContentBox--theme-dark {
    background-color: var(--color-black);
    color: var(--color-white);
  }
  .ContentBox--theme-dark a {
    color: var(--color-primary);
  }
  .ContentBox--theme-light {
    background-color: var(--color-white);
  }
  .ContentBox--theme-primary {
    background-color: var(--color-primary);
  }

  .ContentBox-content {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  /* Align */
  .ContentBox-content--align-center {
    text-align: center;
  }
  .ContentBox-content--align-right {
    text-align: right;
  }

  /* Spacing */
  .ContentBox-content--spacing-much {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  .ContentBox-content--spacing-little {
    padding-top: 2.5rem;
    padding-bottom: 0.5rem;
  }

  .ContentBox p {
    margin-bottom: 2rem;
  }

  .ContentBox-header {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.1;
    margin-bottom: 2rem;
  }
  .ContentBox-button {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .ContentBox-content--spacing-little {
      padding-top: 4rem;
      padding-bottom: 2rem;
    }
    .ContentBox-header {
      font-size: 2rem;
    }
  }
  @media (min-width: 1200px) {
    .ContentBox-content--spacing-much {
      padding-top: 10rem;
      padding-bottom: 8rem;
    }
    .ContentBox-content--spacing-little {
      padding-top: 5rem;
      padding-bottom: 4rem;
    }
    .ContentBox-header {
      font-size: 2.5rem;
    }
  }
</style>
