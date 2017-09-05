<template>
  <a :href="link" target="_blank" class="SocialMediaLink">
    <h3>{{title}}</h3>
  </a>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
  },
};
</script>

<style>
  @import "../assets/css/variables.css";
  
  .SocialMediaLink {
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    color: var(--color-black);
    text-decoration: none;
    position: relative;
    text-align: center;
    transition: all 0.25s cubic-bezier(.5,0,.1,1);
  }
  .SocialMediaLink:hover {
    background-color: var(--color-primary);
    box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.25);
    z-index: 10;
  }
  .SocialMediaLink h3 {
    font-weight: 700;
    text-transform: uppercase;
  }
  @media (min-width: 768px) {
    .SocialMediaLink h3 {
      font-size: 1.25rem;
    }
  }
</style>
