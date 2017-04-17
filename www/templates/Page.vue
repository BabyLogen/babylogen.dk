<template>
  <div>
    <section v-for="section in data.sections">
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
};
</script>

<style>
</style>
