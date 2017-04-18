import contentfulClient from '../assets/js/contentful-client';

export const state = {
  pages: [],
};

export const mutations = {
  addPage(currentState, page) {
    currentState.pages.push(page);
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    const promise = contentfulClient.getEntries({ content_type: 'page' }).then((response) => {
      if (response.items.length === 0) { return; }
      response.items.forEach((item) => {
        commit('addPage', {
          id: item.sys.id,
          path: item.fields.path,
          title: item.fields.title,
        });
      });
    });
    return Promise.resolve(promise);
  },
};
