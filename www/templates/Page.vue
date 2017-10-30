<template>
  <div>
    <section v-for="section in page.fields.sections"  :key="section.sys.id">
      <banner
        v-if="section.sys.contentType.sys.id === 'banner'"
        v-bind="section.fields"
        class="Page-section"
      />
      <content-box
        v-if="section.sys.contentType.sys.id === 'contentBox'"
        v-bind="section.fields"
        class="Page-section"
      />
      <services
        v-if="section.sys.contentType.sys.id === 'itemList'"
        v-bind="section.fields"
        class="Page-section"
      />
      <events
        v-if="section.sys.contentType.sys.id === 'events'"
        v-bind="section.fields"
        class="Page-section"
      />
      <social-media-links
        v-if="section.sys.contentType.sys.id === 'socialMediaList'"
        v-bind="section.fields"
        class="Page-section"
      />
      <image-box
        v-if="section.sys.contentType.sys.id === 'imageBox'"
        v-bind="section.fields"
        class="Page-section"
      />
      <combined-modules
        v-if="section.sys.contentType.sys.id === 'combinedModules'"
        v-bind="section.fields"
        class="Page-section"
      />
      <splits
        v-if="section.sys.contentType.sys.id === 'splits'"
        v-bind="section.fields"
        class="Page-section"
      />
      <newsletter-signup
        v-if="section.sys.contentType.sys.id === 'newsletterSignup'"
        v-bind="section.fields"
        class="Page-section"
      />
    </section>
  </div>
</template>

<script>

export default {
  components: {
    Banner: () => import('../compositions/Banner.vue'),
    ContentBox: () => import('../compositions/ContentBox.vue'),
    Services: () => import('../compositions/Services.vue'),
    Events: () => import('../compositions/Events.vue'),
    SocialMediaLinks: () => import('../compositions/SocialMediaLinks.vue'),
    CombinedModules: () => import('../compositions/CombinedModules.vue'),
    ImageBox: () => import('../components/ImageBox.vue'),
    Splits: () => import('../compositions/Splits.vue'),
    NewsletterSignup: () => import('../compositions/NewsletterSignup.vue'),
  },
  props: {
    page: { type: Object },
  },
};
</script>

<style>

  @import '../assets/css/variables.css';
  .Page-section {
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    .Page-section {
      margin-bottom: 2rem;
    }
  }
  @media (min-width: 1200px) {
    .Page-section {
      margin-bottom: 2rem;
    }
  }
</style>
