<template>
  <nuxt-link :to="`/ydelser/${path}/`" class="Service">
    <div
      class="Service-image"
      :style="{ 'background-image': `url(${image.fields.file.url}?fm=jpg&fl=progressive&w=735)` }"
    />
    <div class="Service-content">
      <h3>{{header}}</h3>
      <p>{{summary}}</p>
    </div>
    <div class="Service-price">{{price}}</div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    header: String,
    image: Object,
    summary: String,
    price: String,
    path: String,
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
    padding-bottom: 2rem;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
  }
  .Service:hover {
    background-color: var(--color-primary);
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .Service-image {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-top: 50%;
  }
  .Service-content {
    padding: 1rem;
  }
  .Service h3 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
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
