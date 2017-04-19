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
};
</script>

<style></style>
