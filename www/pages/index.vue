<template>
  <section>
    <banner v-bind:imageSrc="sections[0].fields.image.fields.file.url">
      {{sections[0].fields.text}}<br>
      <custom-button to="/om-os/">{{sections[0].fields.buttonText}}</custom-button>
    </banner>
  </section>
</template>

<script>
import Banner from '../compositions/Banner.vue';
import CustomButton from '../elements/CustomButton.vue';
import contentfulClient from '../assets/js/contentful-client';

export default {
  components: {
    Banner,
    CustomButton,
  },
  head() {
    return {
      title: this.$store.state.title,
      meta: [
        { hid: 'description', name: 'description', content: this.$store.state.title },
      ],
    };
  },
  asyncData() {
    return contentfulClient
      .getEntries({ 'sys.id': '6vxDOeYLjqmm0aaa2mm8eC' })
      .then((response) => {
        const fields = response.items[0].fields;
        return fields;
      });
  },
  fetch({ store }) {
    return contentfulClient
      .getEntries({ 'sys.id': '6vxDOeYLjqmm0aaa2mm8eC' })
      .then((response) => {
        const fields = response.items[0].fields;
        store.commit('setMeta', fields);
      });
  },
};
</script>

<style>
</style>
