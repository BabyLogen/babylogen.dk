<template>
  <div>
    {{page.fields.header}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import fetchEvent from '../../assets/js/fetch/event';
import headPage from '../../assets/js/head/page';

export default {
  components: {
  },
  computed: mapState(['meta', 'page']),
  head: headPage,
  fetch({ store, params, error }) {
    const { id } = find(store.state.events, { path: params.event });
    return fetchEvent({ id, store, error });
  },
};
</script>

<style></style>
