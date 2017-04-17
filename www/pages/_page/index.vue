<template>
  <Page :data="page" />
</template>

<script>
import { mapState } from 'vuex';
import Page from '../../templates/Page.vue';
import fetchPage from '../../assets/js/fetch/page';
import headPage from '../../assets/js/head/page';

export default {
  components: {
    Page,
  },
  computed: mapState(['meta', 'page']),
  head: headPage,
  fetch({ store, params, error }) {
    return fetchPage({ id: store.state.pages[params.page], store, error });
  },
};
</script>

<style></style>
