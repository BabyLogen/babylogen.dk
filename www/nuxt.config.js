const contentfulClient = require('./assets/js/contentful-client');
const NuxtHelpers = require('nuxt-helpers');

module.exports = NuxtHelpers([
  'optimize',
  'offline',
  'manifest',
], {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },
  /*
  ** Global css
  */
  css: [
    '~assets/css/main.css',
  ],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#7DFAD3' },
  /*
  ** Customize manifest.json
  */
  manifest: {
    name: 'Babylogen',
    theme_color: '#7DFAD3',
  },
  /*
  ** Build configuration
  */
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
  vendor: ['contentful', 'lodash/find', 'marked'],
  plugins: [
    { src: '~plugins/detect-touch', ssr: false },
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

        .then(() => routes);
      return Promise.resolve(promise);
    },
  },
});
