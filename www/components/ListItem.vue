<template>
  <nuxt-link :to="`/ydelser/${path}/`" class="ListItem">
    <div
      class="ListItem-image"
      :style="{ 'background-image': `url(${image.fields.file.url}?fm=jpg&fl=progressive&w=735)` }"
    />
    <div class="ListItem-content">
      <h3>{{header}}</h3>
      <p>{{summary}}</p>
    </div>
    <div class="ListItem-price">{{price}}</div>
  </nuxt-link>
</template>

<script>
import fetchItem from '../assets/js/fetch/item';

export default {
  props: {
    id: String,
  },
  data() {
    return {
      header: '',
      image: {
        fields: {
          file: {
            url: '',
          },
        },
      },
      summary: '',
      price: '',
      path: '',
    };
  },
  methods: {
    update(data) {
      this.header = data.header;
      this.image = data.image;
      this.summary = data.summary;
      this.price = data.price;
      this.path = data.path;
    },
  },
  created() {
    fetchItem({ id: this.id }).then((item) => {
      this.update(item.fields);
    });
  },
};
</script>

<style>
  .ListItem {
    display: block;
    color: var(--color-black);
    text-decoration: none;
    position: relative;
    height: 100%;
    padding-bottom: 2rem;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
  }
  .ListItem:hover {
    background-color: var(--color-primary);
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .ListItem-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50%;
  }
  .ListItem-content {
    padding: 1rem;
  }
  .ListItem h3 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    word-break: break-all;
  }
  .ListItem-price {
    font-weight: 700;
    font-size: 1.25rem;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
  @media (min-width: 768px) {
    .ListItem-image {
      padding-top: 60%;
    }
    .ListItem h3 {
      font-size: 1.25rem;
    }
  }
  @media (min-width: 992px) {
    .ListItem-image {
      padding-top: 70%;
    }
  }
  @media (min-width: 1200px) {
    .ListItem-image {
      padding-top: 80%;
    }
  }
</style>
