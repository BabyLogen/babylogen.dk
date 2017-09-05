<template>
  <Page :page="mappedPage" />
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
  computed: {
    ...mapState(['meta', 'page']),
    mappedPage() {
      const { sections } = this.page.fields;
      sections.push({
        sys: {
          id: 'blogpost-links',
          contentType: { sys: { id: 'contentBox' } },
        },
        fields: {
          body: this.$store.state.blogposts.map(b => (
            `**[${b.titel}](/blog/${b.path}/)**`
          )).join(`

`),
          width: 'text',
          theme: 'dark',
          header: 'Blogposts',
        },
      });
      return {
        fields: {
          sections,
        },
      };
    },
  },
  head: headPage,
  fetch({ store, error }) {
    const { id } = find(store.state.pages, { path: 'blog' });
    return fetchPage({ id, store, error });
  },
};
</script>

<style></style>
