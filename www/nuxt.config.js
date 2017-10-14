const contentfulClient = require('./assets/js/contentful-client');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'BabyTeamet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Få kompetent og ærlig vejledning af specialister før, under og efter graviditeten.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global css
  */
  css: [
    '@/assets/css/main.css',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7DFAD3' },
  /*
  ** Build configuration
  */
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return false;
    },
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
  manifest: {
    name: 'BabyTeamet',
    description: 'Få kompetent og ærlig vejledning af specialister før, under og efter graviditeten.',
    theme_color: '#7DFAD3',
  },
  vendor: ['contentful', 'lodash/find', 'marked'],
  modules: [
    '@nuxtjs/pwa',
    ['@nuxtjs/google-analytics', { ua: 'UA-101008422-1' }],
    ['./modules/hotjar', { hjid: 537556, hjsv: 5 }],
  ],
  plugins: [
    { src: '~/plugins/detect-touch', ssr: false },
  ],
  generate: {
    routes() {
      const routes = [];

      // First level pages
      const promise = contentfulClient.getEntries({ content_type: 'page' })
        .then(response => (
          response.items.forEach(item => routes.push(`/${item.fields.path}/`))
        ))

        // Services
        .then(() => contentfulClient.getEntries({ content_type: 'service' }))
        .then(response => (
          response.items.forEach(item => routes.push(`/vi-tilbyder/${item.fields.path}/`))
        ))

        // Events
        .then(() => contentfulClient.getEntries({ content_type: 'event' }))
        .then(response => (
          response.items.forEach(item => routes.push(`/events/${item.fields.path}/`))
        ))

        // Blogposts
        .then(() => contentfulClient.getEntries({ content_type: 'blogpost' }))
        .then(response => (
          response.items.forEach(item => routes.push(`/blog/${item.fields.urlPath}/`))
        ))

        .then(() => routes);
      return Promise.resolve(promise);
    },
  },
};
