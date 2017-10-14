<template>
  <Page :page="page" />
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
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
    const { id } = find(store.state.pages, { path: params.page });
    return fetchPage({ id, store, error });
  },
  mounted() {
    const initPos = (window.pageYOffset > (144 - 50)) ? (144 - 49) : 0;
    window.scrollTo(0, initPos);
  },
};
</script>

<style></style>
