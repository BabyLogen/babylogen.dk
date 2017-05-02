<template>
  <div>
    <section v-for="module in modules" :key="module.sys.id">
      <content-box
        v-if="module.sys.contentType.sys.id === 'contentBox'"
        v-bind="module.fields"
      />
      <image-box
        v-if="module.sys.contentType.sys.id === 'imageBox'"
        v-bind="module.fields"
      />
      <splits
        v-if="module.sys.contentType.sys.id === 'splits'"
        v-bind="module.fields"
      />
    </section>
  </div>
</template>

<script>
import ContentBox from '../compositions/ContentBox.vue';
import Splits from '../compositions/Splits.vue';
import ImageBox from '../components/ImageBox.vue';

export default {
  components: {
    ContentBox,
    ImageBox,
    Splits,
  },
  props: {
    modules: { type: Array },
  },
};
</script>

<style>
</style>
