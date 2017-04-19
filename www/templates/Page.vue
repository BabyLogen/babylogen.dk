<template>
  <div>
    <section v-for="section in page.fields.sections">
      <banner
        v-if="section.sys.contentType.sys.id === 'banner'"
        :banner="section"
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
    page: { type: Object },
  },
};
</script>

<style></style>
