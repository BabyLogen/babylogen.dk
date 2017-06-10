<template>
  <div>
    <Page :page="mappedPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import fetchService from '../../assets/js/fetch/service';
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
            fields: { modules: [{
              sys: {
                id: 'mainContent',
                contentType: { sys: { id: 'contentBox' } },
              },
              fields: {
                theme: 'primary',
                header: this.page.fields.header,
                body: this.page.fields.summary,
                align: 'center',
		spacing: 'little',
              },
            }, {
	      sys: {
		id: 'image',
		contentType: { sys: { id: 'imageBox' } },
	      },
	      fields: { image: this.page.fields.image },
	    }, {
              sys: { contentType: { sys: { id: 'splits' } } },
              fields: { modules: [{
                sys: {
                  id: 'description',
                  contentType: { sys: { id: 'contentBox' } },
                },
                fields: {
                  body: this.page.fields.description,
                },
              }, {
                sys: {
                  id: 'cta',
                  contentType: { sys: { id: 'contentBox' } },
                },
                fields: {
                  theme: 'dark',
                  align: 'center',
                  header: this.page.fields.price,
                  buttonText: 'Book nu',
                  buttonLink: { fields: { path: '#' } },
                },
              }] },
            }] },
          }],
        },
      };
    },
  },
  head: headPage,
  fetch({ store, params, error }) {
    const { id } = find(store.state.services, { path: params.service });
    return fetchService({ id, store, error });
  },
};
</script>

<style></style>
