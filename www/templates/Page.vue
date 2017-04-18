<template>
  <div>
    <section v-for="section in data.sections">
      <banner
        v-if="section.sys.contentType.sys.id === 'banner'"
        :image-url="section.fields.image.fields.file.url"
        :text="section.fields.text"
        :button-text="section.fields.buttonText"
        :button-link="getButtonLink(section)"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import Banner from '../compositions/Banner.vue';
import CustomButton from '../elements/CustomButton.vue';

export default {
  components: {
    Banner,
    CustomButton,
  },
  props: {
    data: { type: Object },
  },
  computed: mapState(['pages']),
  methods: {
    getButtonLink(section) {
      const { path } = find(this.pages, { id: section.fields.buttonLink.sys.id });
      return `/${path}/`;
    },
  },
};
</script>

<style></style>
