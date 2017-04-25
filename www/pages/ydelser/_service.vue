<template>
  <div>
    {{page.fields.header}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import fetchService from '../../assets/js/fetch/service';
import headPage from '../../assets/js/head/page';

export default {
  components: {
  },
  computed: mapState(['meta', 'page']),
  head: headPage,
  fetch({ store, params, error }) {
    const { id } = find(store.state.services, { path: params.service });
    return fetchService({ id, store, error });
  },
};
</script>

<style></style>
