<template>
  <div>
    <section v-for="section in data.sections">
      <banner
        v-if="section.sys.contentType.sys.id === 'banner'"
        :image-url="section.fields.image.fields.file.url"
        :text="section.fields.text"
        :button-text="section.fields.buttonText"
        :button-link="`/${pages.idToPath[section.fields.buttonLink.sys.id]}/`"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
};
</script>

<style>
</style>
