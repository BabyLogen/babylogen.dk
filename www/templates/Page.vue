<template>
  <div>
    <section v-for="section in page.fields.sections">
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
      <item-list
        v-if="section.sys.contentType.sys.id === 'itemList'"
        v-bind="section.fields"
        class="Page-section"
      />
    </section>
  </div>
</template>

<script>
import Banner from '../compositions/Banner.vue';
import ContentBox from '../compositions/ContentBox.vue';
import ItemList from '../compositions/ItemList.vue';

export default {
  components: {
    Banner,
    ContentBox,
    ItemList,
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
