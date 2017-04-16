<template>
  <div>
    <section v-for="section in page.sections">
      <banner
        v-if="section.sys.contentType.sys.id === 'banner'"
        v-bind:image-url="section.fields.image.fields.file.url"
        v-bind:text="section.fields.text"
        v-bind:button-text="section.fields.buttonText"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Banner from '../compositions/Banner.vue';
import CustomButton from '../elements/CustomButton.vue';
import contentfulClient from '../assets/js/contentful-client';

export default {
  components: {
    Banner,
    CustomButton,
  },
  computed: mapState(['meta', 'page']),
  head() {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
      ],
    };
  },
  fetch({ store }) {
    return contentfulClient
      .getEntries({ 'sys.id': '6vxDOeYLjqmm0aaa2mm8eC' })
      .then((response) => {
        const fields = response.items[0].fields;
        store.commit('meta/set', fields);
        store.commit('page/setSections', fields.sections);
      });
  },
};
</script>

<style>
</style>
