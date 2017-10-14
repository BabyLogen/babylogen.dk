<template>
  <div>
    <Page :page="mappedPage" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import find from 'lodash/find';
import fetchEvent from '../../assets/js/fetch/event';
import headPage from '../../assets/js/head/page';
import Page from '../../templates/Page.vue';
import getDate from '../../assets/js/utils/get-date';
import getInterval from '../../assets/js/utils/get-interval';

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
                  header: this.page.fields.header,
                  body: `${getDate(this.page.fields.startDate)} ${getInterval(this.page.fields.startDate, this.page.fields.endDate)}`,
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
                fields: {
                  modules: [{
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
                      buttonLink: { fields: { path: this.page.fields.bookLink } },
                    },
                  }],
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
    const { id } = find(store.state.events, { path: params.event });
    return fetchEvent({ id, store, error });
  },
};
</script>

<style></style>
