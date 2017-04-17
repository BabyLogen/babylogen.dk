import contentfulClient from '../assets/js/contentful-client';

export const state = {
  pages: {
    pathToId: {},
    idToPath: {},
  },
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
      const pages = {
        pathToId: {},
        idToPath: {},
      };
      response.items.forEach((item) => {
        pages.pathToId[item.fields.path] = item.sys.id;
        pages.idToPath[item.sys.id] = item.fields.path;
      });
      commit('setPages', pages);
    });
    return Promise.resolve(promise);
  },
};
