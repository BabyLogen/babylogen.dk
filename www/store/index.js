import contentfulClient from '../assets/js/contentful-client';

export const state = {
  pages: {},
};

export const mutations = {
  setPages(currentState, pages) {
    currentState.pages = pages;
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    const promise = contentfulClient.getEntries({ content_type: 'page' }).then((response) => {
      if (response.items.length === 0) { return; }
      const pages = {};
      response.items.forEach((item) => {
        pages[item.fields.path] = item.sys.id;
      });
      commit('setPages', pages);
    });
    return Promise.resolve(promise);
  },
};
