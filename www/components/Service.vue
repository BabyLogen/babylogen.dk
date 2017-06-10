<template>
  <nuxt-link :to="`/vi-tilbyder/${path}/`" class="Service">
    <grid-container class="Service-container">
      <grid-column xs="3" sm="12" class="Service-column">
        <div class="Service-image"
        :style="{ 'background-image': `url(${image.fields.file.url}?fm=jpg&fl=progressive&w=735)` }"/>
      </grid-column>
      <grid-column xs="9" sm="12" class="Service-column">
        <div class="Service-content">
          <h3>{{header}}</h3>
          <p>{{summary}}</p>
        </div>
        <div class="Service-price">{{price}}</div>
      </grid-column>
    </grid-container>
  </nuxt-link>
</template>

<script>
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';

export default {
  components: {
    GridContainer,
    GridColumn,
  },
  props: {
    header: String,
    image: Object,
    summary: String,
    price: String,
    path: String,
    description: String,
  },
};
</script>

<style>
  .Service {
    display: block;
    color: var(--color-black);
    text-decoration: none;
    position: relative;
    height: 100%;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
  }
  .Service:hover {
    background-color: var(--color-primary);
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .Service-container, .Service-column {
    padding: 0;
  }
  .Service-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 100%;
  }
  .Service-content {
    padding: 1rem 1rem 3rem;
  }
  .Service h3 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    overflow-wrap: break-word;
    word-wrap: break-word;
  }
  .Service-price {
    font-weight: 700;
    font-size: 1.25rem;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  @media (min-width: 768px) {
    .Service-image {
      padding-top: 60%;
    }
    .Service h3 {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    .Service-image {
      padding-top: 70%;
    }
  }
  @media (min-width: 1200px) {
    .Service-image {
      padding-top: 80%;
    }
  }
</style>
