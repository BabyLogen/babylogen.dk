<template>
  <div>
    <Page :page="mappedPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import fetchBlog from '../../assets/js/fetch/blog';
import headPage from '../../assets/js/head/page';
import Page from '../../templates/Page.vue';

export default {
  components: {
    Page,
  },
  computed: {
    ...mapState(['meta', 'page']),
    mappedPage() {
      return {
        fields: {
          sections: [{
            sys: { contentType: { sys: { id: 'combinedModules' } } },
            fields: {
              modules: [{
                sys: {
                  id: 'mainContent',
                  contentType: { sys: { id: 'contentBox' } },
                },
                fields: {
                  theme: 'primary',
                  header: this.page.fields.titel,
                  align: 'center',
                  spacing: 'little',
                },
              }, {
                sys: {
                  id: 'body',
                  contentType: { sys: { id: 'contentBox' } },
                },
                fields: {
                  body: this.page.fields.body,
                  width: 'text',
                },
              }],
            },
          }],
        },
      };
    },
  },
  head: headPage,
  fetch({ store, params, error }) {
    const { id } = find(store.state.blogposts, { path: params.blog });
    return fetchBlog({ id, store, error });
  },
  mounted() {
    const initPos = (window.pageYOffset > (144 - 50)) ? (144 - 49) : 0;
    window.scrollTo(0, initPos);
  },
};
</script>

<style></style>
