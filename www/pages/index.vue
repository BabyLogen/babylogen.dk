<template>
  <section>
    <banner imageSrc="/images/frontpage-banner.jpg">
      Få kompetent og ærlig vejledning af specialister før, under og efter graviditeten.<br>
      <custom-button>Læs mere</custom-button>
    </banner>
  </section>
</template>

<script>
import Banner from '../compositions/Banner.vue';
import CustomButton from '../elements/CustomButton.vue';

export default {
  components: {
    Banner,
    CustomButton,
  },
};
</script>

<style>
</style>
