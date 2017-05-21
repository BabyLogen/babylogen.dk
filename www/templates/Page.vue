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
    </section>
  </div>
</template>

<script>
import Banner from '../compositions/Banner.vue';
import ContentBox from '../compositions/ContentBox.vue';
import Services from '../compositions/Services.vue';
import Events from '../compositions/Events.vue';
import SocialMediaLinks from '../compositions/SocialMediaLinks.vue';
import CombinedModules from '../compositions/CombinedModules.vue';
import Splits from '../compositions/Splits.vue';
import ImageBox from '../components/ImageBox.vue';

export default {
  components: {
    Banner,
    ContentBox,
    Services,
    Events,
    SocialMediaLinks,
    CombinedModules,
    ImageBox,
    Splits,
  },
  props: {
    page: { type: Object },
  },
};
</script>

<style>
  .Page-section {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    .Page-section {
      margin-bottom: 4rem;
    }
  }
  @media (min-width: 1200px) {
    .Page-section {
      margin-bottom: 6rem;
    }
  }
</style>
