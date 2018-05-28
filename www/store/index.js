import contentfulClient from '../assets/js/contentful-client';

export function state() {
  return {
    pages: [],
    navigation: [],
    services: [],
    events: [],
    blogposts: [],
  };
}

export const mutations = {
  addPage(currentState, page) {
    currentState.pages.push(page);
  },
  addService(currentState, service) {
    currentState.services.push(service);
  },
  addEvent(currentState, event) {
    currentState.events.push(event);
  },
  addBlogpost(currentState, blogpost) {
    currentState.blogposts.push(blogpost);
  },
  addNavigation(currentState, navigation) {
    currentState.navigation = navigation;
  },
};

export const actions = {
  nuxtServerInit({ commit }) {
    // Pages
    const promise = contentfulClient.getEntries({
      content_type: 'page',
      include: 0,
      limit: 1000,
      order: '-sys.createdAt',
    }).then((response) => {
      if (response.items.length === 0) { return; }
      response.items.forEach((item) => {
        commit('addPage', {
          id: item.sys.id,
          path: item.fields.path,
          title: item.fields.title,
        });
      });
    })

    // Navigation
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

      // Services
      .then(() => (
        contentfulClient
          .getEntries({
            content_type: 'service',
            include: 0,
            limit: 1000,

            order: '-sys.createdAt',
          })
          .then((response) => {
            if (response.items.length === 0) { return; }
            response.items.forEach((item) => {
              commit('addService', {
                id: item.sys.id,
                path: item.fields.path,
              });
            });
          })
      ))

      // Events
      .then(() => (
        contentfulClient
          .getEntries({
            content_type: 'event',
            include: 0,
            limit: 1000,

            order: '-sys.createdAt',
          })
          .then((response) => {
            if (response.items.length === 0) { return; }
            response.items.forEach((item) => {
              commit('addEvent', {
                id: item.sys.id,
                path: item.fields.path,
              });
            });
          })
      ))

      // Blogposts
      .then(() => (
        contentfulClient
          .getEntries({
            content_type: 'blogpost',
            include: 0,
            limit: 1000,

            order: '-sys.createdAt',
          })
          .then((response) => {
            if (response.items.length === 0) { return; }
            response.items.forEach((item) => {
              commit('addBlogpost', {
                id: item.sys.id,
                path: item.fields.urlPath,
                titel: item.fields.titel,
              });
            });
          })
      ));
    return Promise.resolve(promise);
  },
};
