<template>
  <nuxt-link :to="`/events/${path}/`" class="Event">
    <grid-container class="Event-container">
      <grid-column xs="3" sm="12" class="Event-column">
        <div class="Event-image"
        :style="{ 'background-image': `url(${image ? image.fields.file.url: ''}?fm=jpg&fl=progressive&w=735)` }"/>
      </grid-column>
      <grid-column xs="9" sm="12" class="Event-column">
        <div class="Event-content">
          <h3>{{header || Array(10).join('█')}}</h3>
          <p>{{date}}</p>
          <p>{{time}}</p>
        </div>
        <div class="Event-price">{{price}}</div>
      </grid-column>
    </grid-container>
  </nuxt-link>
</template>

<script>
import GridContainer from '../elements/GridContainer.vue';
import GridColumn from '../elements/GridColumn.vue';
import getDate from '../assets/js/utils/get-date';
import getInterval from '../assets/js/utils/get-interval';

export default {
  components: {
    GridContainer,
    GridColumn,
  },
  props: {
    header: String,
    image: Object,
    startDate: String,
    endDate: String,
    price: String,
    path: String,
  },
  computed: {
    date() {
      return getDate(this.startDate);
    },
    time() {
      return getInterval(this.startDate, this.endDate);
    },
  },
};
</script>

<style>
  .Event {
    display: block;
    color: var(--color-black);
    text-decoration: none;
    position: relative;
    height: 100%;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
  }
  .Event:hover {
    background-color: var(--color-primary);
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .Event-container, .Event-column {
    padding: 0;
  }
  .Event-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .Event-content {
    padding: 1rem 1rem 3rem;
  }
  .Event h3 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  .Event-price {
    font-weight: 700;
    font-size: 1.25rem;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  @media (min-width: 768px) {
    .Event-image {
      padding-top: 60%;
    }
    .Event h3 {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    .Event-image {
      padding-top: 70%;
    }
  }
  @media (min-width: 1200px) {
    .Event-image {
      padding-top: 80%;
    }
  }
</style>
