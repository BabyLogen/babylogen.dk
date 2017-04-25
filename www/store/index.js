import contentfulClient from '../assets/js/contentful-client';

export const state = {
  pages: [],
  navigation: [],
  services: [],
};

export const mutations = {
  addPage(currentState, page) {
    currentState.pages.push(page);
  },
  addService(currentState, service) {
    currentState.services.push(service);
  },
  addNavigation(currentState, navigation) {
    currentState.navigation = navigation;
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
    })
    .then(() => (
      contentfulClient
        .getEntries({ 'sys.id': 'xdSWiS7rYy4WE0OOk0Q6I' })
        .then((response) => {
          if (response.items.length === 0) {
            return;
          }
          const navigation = response.items[0].fields.pages.map(page => ({
            path: `/${page.fields.path}/`,
            title: page.fields.title,
          }));
          commit('addNavigation', navigation);
        })
      ))
    .then(() => (
      contentfulClient
        .getEntries({ content_type: 'service' })
        .then((response) => {
          if (response.items.length === 0) { return; }
          response.items.forEach((item) => {
            commit('addService', {
              id: item.sys.id,
              path: item.fields.path,
              title: item.fields.title,
            });
          });
        })
      ));
    return Promise.resolve(promise);
  },
};
